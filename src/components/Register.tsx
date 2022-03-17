import { useContext, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";


export default function Register() {

  let email = useRef<HTMLInputElement>(null);
  let password = useRef<HTMLInputElement>(null);
  let ctx = useContext(AuthContext);


  const registerUser = () => {
    if(email.current === null || password.current === null) {
      return;
    }
    if(email.current.value === null || 
      password.current.value === null) {
      return;
    }
    if(password.current?.value.length < 6) {
      return;
    }
    ctx?.createUser(email.current.value, password.current.value);
  }


  return (
    <div id="auth-card-cont">
      <h1 className="auth-title">Register</h1>
      <div
        className="auth-form"
        onSubmit={() => {
          console.log("Hello world");
        }}
      >
        <p className="auth-email-label">Email</p>
        <input
          ref={email}
          type="email"
          name="register-email-input"
          id="register-email-input"
          className="auth-email-input"
          required
        />

        <p className="auth-password-label">Password</p>
        <input
          ref={password}
          type="password"
          name="register-password-input"
          id="register-password-input"
          className="auth-password-input"
          required
        />

        <p className="auth-password-label">Confirm Password</p>
        <input
          ref={password}
          type="password"
          name="register-confirm-password-input"
          id="register-confirm-password-input"
          className="auth-password-input"
          required
        />
        <button
          type="submit"
          className="auth-form-submit"
          onClick={() => {
            registerUser();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
