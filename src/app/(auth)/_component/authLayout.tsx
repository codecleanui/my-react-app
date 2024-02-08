import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./login.module.scss";
import useAsyncRequest from "../useAsyncRequest";
import Cookies from "js-cookie";

interface FormData {
  username: string;
  password: string;
  role: string;
  termsAccepted: boolean;
  [key: string]: any;
}

function AuthLayout() {
  // State variable for form data
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    role: "user",
    termsAccepted: false,
  });
  const { isSuccess: loginSuccess, execute: executeLogin } = useAsyncRequest();

  // Event handler for form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      executeLogin("POST", "http://localhost:8080/api/auth/signin", {
        username: formData.username,
        password: formData.password,
      });
    } catch (error) {
      console.error(error);
    }
  };
  // const handleGetMe = async () => {
  //   try {
  //     executeLogin("GET", "http://localhost:8080/api/user/me");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  if (loginSuccess) {
    console.log(Cookies.get("bearer"));
  }
  // Register function with onChange event handler and counter increment
  const register = (name: string, fieldType?: string) => ({
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { value, type } = e.target;
      const { checked } = e.target as any;

      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    },
    value: formData[name],
    ...(fieldType === "checkbox" ? { checked: formData[name] } : {}),
  });

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>
              Username:
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your username"
              {...register("username")}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              className={styles.input}
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="role" className={styles.label}>
              Role:
            </label>
            <select className={styles.select} {...register("role")}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="superAdmin">Super Admin</option>
            </select>
          </div>
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              className={styles.checkbox}
              {...register("termsAccepted", "checkbox")}
            />
            <label htmlFor="terms" className={styles.label}>
              I accept terms & conditions
            </label>
          </div>
          {/* <button onClick={handleGetMe}>Get Cookie</button> */}
          <button type="submit" className={styles.button}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthLayout;
