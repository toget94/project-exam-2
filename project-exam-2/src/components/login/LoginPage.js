import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../layout/Nav";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <>
      <NavBar />
      <div>Login</div>
      <LoginForm />
      <hr></hr>
      <p>Not a user?</p>
      <Link to="/register">Register here</Link>
    </>
  );
}

export default LoginPage;
