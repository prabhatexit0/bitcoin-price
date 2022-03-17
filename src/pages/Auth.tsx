import "../styles/auth.css";
import Login from "../components/Login";
import Register from "../components/Register";
import { useContext, useState } from "react";
import {AuthContext} from '../contexts/AuthContext'
import Profile from "./Profile";

function Auth() {
  let ctx = useContext(AuthContext);
  return (
    <div id="auth-main">
      {ctx?.currentUser ? (
        <Profile />
      ) : (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
}


export default Auth;
