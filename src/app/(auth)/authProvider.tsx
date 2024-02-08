import React, { createContext, useContext,useMemo } from "react";
import Cookies from "js-cookie";
import useAsyncRequest from "./useAsyncRequest";

interface AuthContextType {
  isAuthenticated: boolean;
  isConfirmPrivacyPolicyAccepted: boolean;
  logout: () => void;
  handleConfirmPrivacyPolicy: (response: "ACCEPT" | "REJECT") => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    isSuccess: logoutSuccess,
    execute: executeLogout,
  } = useAsyncRequest();
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(true);
  const [isConfirmPrivacyPolicyAccepted, setIsConfirmPrivacyPolicyAccepted] = React.useState<boolean>(localStorage.getItem("acceptPolicy") === "ACCEPT");

  const logout = async () => {
    try {
      executeLogout("POST", "http://localhost:8080/api/auth/signout");

      if (logoutSuccess) {
        Cookies.remove("access_token");
        setIsAuthenticated(false);
      }
    } catch (error) {
      // Handle logout error
    }
  };

  const handleConfirmPrivacyPolicy = (response: "ACCEPT" | "REJECT") => {
    if (response == "ACCEPT") {
      localStorage.setItem("acceptPolicy", "ACCEPT");
      setIsConfirmPrivacyPolicyAccepted(true);
    }
    if (response == "REJECT") {
      localStorage.setItem("acceptPolicy", "REJECT");
      setIsConfirmPrivacyPolicyAccepted(false);
    }
  };
  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      isConfirmPrivacyPolicyAccepted,
      logout,
      handleConfirmPrivacyPolicy,
    }),
    [
      isAuthenticated,
      isConfirmPrivacyPolicyAccepted,
      logout,
      handleConfirmPrivacyPolicy,
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
