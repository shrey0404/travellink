import React, { useContext, useState } from "react";
import { TravelContext } from "../context/TravelContext";
import "./Login.css";

const Login = () => {
  const { setUserRole, setLoggedIn } = useContext(TravelContext);
  const [role, setRole] = useState("");

  const handleLogin = () => {
    setUserRole(role);
    setLoggedIn(true);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="">Select Role</option>
        <option value="Seeker">Seeker</option>
        <option value="Watcher">Watcher</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
