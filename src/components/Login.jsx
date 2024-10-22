import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ token, setToken }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  const [hasError, setHasError] = useState(null);

  const handleUserInput = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `${process.env.VITE_API_BASE_URL}/api/users/login`,
        loginData
      );
      console.log(data);
      if (data.data.token) {
        localStorage.setItem("token", data.data.token);
        setToken(data.data.token);
        navigate("/me");
      }
    } catch (err) {
      console.log(err);
      setHasError(err.response.data.message);
    }
  };

  console.log(loginData);
  return (
    <div className="register-container">
      <h2>Login</h2>
      <form
        className="register-form"
        onSubmit={handleLoginSubmit}
      >
        <label>
          <p>Email</p>
          <input
            type="email"
            name="email"
            onChange={handleUserInput}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            onChange={handleUserInput}
          />
        </label>
        <button>Login</button>
      </form>
      {hasError && <p className="auth-error">{error}</p>}
      <p>
        Need an Account? Sign up <Link to="Register">Here</Link>
      </p>
    </div>
  );
}

export default Login;
