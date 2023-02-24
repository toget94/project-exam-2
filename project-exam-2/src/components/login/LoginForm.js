import React from "react";
import { useState } from "react";
import { BASE_URL, LOGIN_TOKEN } from "../../constants/api";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log({ email, password });

    SubmitLogin(email, password);
  };

  async function SubmitLogin(email, password) {
    const URL = BASE_URL + LOGIN_TOKEN;

    const data = JSON.stringify({ email: email, password: password });
    const options = {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(URL, options);
      const json = await response.json();

      console.log(json);
    } catch (error) {}
  }

  return (
    <form className="form-contaier" onSubmit={handleSubmit}>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        required
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        minLength={8}
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="login-btn">Login</button>
    </form>
  );
}

export default LoginForm;
