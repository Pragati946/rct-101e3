import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const { login } = useContext(AuthContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div>
        Login
      <form onSubmit={handleSubmit}>
      <input data-cy="login-email" name="email"
          type="email"
          placeholder="Enter Email"
          onChange={handleChange} />
      <input data-cy="login-password" 
      name="password"
      type="password"
      placeholder="Enter Password.."
      handleChange={handleChange}/>
      <button data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
