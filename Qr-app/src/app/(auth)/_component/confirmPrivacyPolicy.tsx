import React from "react";
import { useAuth } from "../authProvider";
import styles from "./confirmPrivacyPolicy.module.scss";

export const ConfirmPrivacyPolicy = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const { handleConfirmPrivacyPolicy, isConfirmPrivacyPolicyAccepted } =
    useAuth();
  if (!isConfirmPrivacyPolicyAccepted) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.title}>
            By clicking "Enter Site," you agree to abide by our terms of service
            and privacy policy. This website may use cookies to enhance your
            user experience.
          </div>
          <div className="flex items-center justify-between flex-row gap-4 rounded-md p-4 max-w-[230rem]">
            <button
              onClick={() => handleConfirmPrivacyPolicy("ACCEPT")}
              className={styles.buttonOutline}
            >
              Accept
            </button>
            <button
              onClick={() => handleConfirmPrivacyPolicy("REJECT")}
              className={styles.button}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return children;
  }
};
