import React from "react";
import NavBar from "../layout/Nav";
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <>
      <NavBar />
      <div>Register</div>
      <RegisterForm />
      <hr></hr>
      <p>Already a user?</p>
      <Link to="/">Login here</Link>
    </>
  );
}
export default RegisterPage;
