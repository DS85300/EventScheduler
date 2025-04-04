import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok)
        throw new Error(
          "Log In failed" || `HTTP ${response.status}` || errorData.message
        );
      const data = await response.json();
      localStorage.setItem("api-token", data.token);
<<<<<<< HEAD
      navigate("/");
=======
      navigate("/createEvent");
>>>>>>> main
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-[#79c3e0] to-[#2084ab] flex items-center justify-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box"
        >
          <legend className="fieldset-legend">Login</legend>

          {error && <p className="text-red-500">{error}</p>}

          <label className="fieldset-label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="fieldset-label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
