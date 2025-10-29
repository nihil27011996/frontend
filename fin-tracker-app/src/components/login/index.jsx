import { useState } from "react";
import styles from "./Login.module.css";
import loginUser from "../../api/userAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await loginUser.loginUser(email, password);
      if (loginResponse.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Log In</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className={styles.row}>
            <label className={styles.remember}>
              <input type="checkbox" /> Remember me
            </label>
            <a className={styles.link} href="#">
              Forgot password?
            </a>
          </div>
          <button type="submit" className={styles.button}>
            Log In
          </button>
        </form>
        <p className={styles.footer}>
          Don’t have an account?{" "}
          <a className={styles.link} href="/register">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
