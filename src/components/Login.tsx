import { AuthContext } from "../contexts/AuthContext";
import { useContext, useRef } from "react";

export default function Login() {
  let ctx = useContext(AuthContext);
  let email = useRef<HTMLInputElement>(null);
  let password = useRef<HTMLInputElement>(null);

  const loginUser = () => {
    if (email.current === null || password.current === null) {
      return;
    }
    if (email.current.value === null || password.current.value === null) {
      return;
    }
    if (password.current?.value.length < 6) {
      return;
    }
    ctx?.signInUser(email.current.value, password.current.value);
  };

  const loginUserWithGoogle = () => {
    ctx?.signInUserWithGooogle();
  }

  return (
    <div id="auth-card-cont">
      <h1 className="auth-title">Login</h1>
      <div className="auth-form">
        <p className="auth-email-label">Email</p>
        <input
          ref={email}
          type="text"
          name="login-email-input"
          id="login-email-input"
          className="auth-email-input"
          required
        />

        <p className="auth-password-label">Password</p>
        <input
          ref={password}
          type="password"
          name="login-password-input"
          id="login-password-input"
          className="auth-password-input"
          required
        />

        <button onClick={loginUser} className="auth-form-submit">
          Submit
        </button>

        <button id="login-with-google"
        onClick={loginUserWithGoogle}
        >Sign In With Google</button>
      </div>
    </div>
  );
}
