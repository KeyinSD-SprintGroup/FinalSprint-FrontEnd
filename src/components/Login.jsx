import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Login = ({ setIsLoggedIn, isLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [auth, setAuth] = useState(false);
  const nav = useNavigate();

  const correctUsername = "admin";
  const correctPassword = "admin";

  const handleLogin = () => {
    if (!(username === correctUsername)) {
      alert("User doesn't exist");
      return;
    }
    if (!(password === correctPassword)) {
      alert("Passwords do not match records.");
      return;
    }
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    nav("/admin");
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      console.log(`Welcome back, ${correctUsername}!`);
    }
  }, [isLoggedIn]);

  return (
    <div>
      <div className="flex justify-center font-Gupter">
        <div className="mb-6 mt-6 flex w-full max-w-screen-lg flex-col rounded bg-gray-300">
          <div className="h-1/2 w-1/2 items-center pl-5">
            <div className="mt-6 flex flex-row justify-between">
              <h1 className="text-4xl text-gray-700">Admin Login</h1>
            </div>
            <div className="p-5">
              <div className="flex p-2">
                <h2 className="w-2/5">Username:</h2>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <div className="flex p-2">
                <h2 className="w-2/5">Password:</h2>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div>
              <button
                className="m-2 mb-8 w-48 rounded border border-black/50 bg-avion-blue p-2 text-white"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
export default Login;
