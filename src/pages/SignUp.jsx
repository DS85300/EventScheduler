import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Invalid email format");
        return;
      }

      // Fetch all users
      const usersResponse = await fetch("http://localhost:3001/api/users");
      if (!usersResponse.ok) {
        setError("Failed to fetch users. Please try again later.");
        return;
      }

      const json = await usersResponse.json();
      const users = json.results;

      // Check if the email already exists
      const emailExists = users.some((user) => user.email === email);
      if (emailExists) {
        setError("This email is already in use. Please choose another.");
        return;
      }

      // Proceed to sign up since the email does not exist
      const signUpResponse = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!signUpResponse.ok) {
        const errorData = await signUpResponse.json();
        setError(errorData.message || "Sign up failed. Please try again.");
        return;
      }

      // Sign up success, store the data in localStorage and redirect to login page
      const data = await signUpResponse.json();
      localStorage.setItem("api-token", data.token); // Store token in localStorage
      localStorage.setItem("email", email); // Store email in localStorage
      navigate("/LogIn"); // Redirect to login page
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#79c3e0] to-[#2084ab]">
      <form
        onSubmit={handleSubmit}
        className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box"
      >
        {error && <p className="text-red-500">{error}</p>}
        <label className="fieldset-label font-bold text-sm text-black">
          Email
        </label>
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="fieldset-label font-bold text-sm text-black">
          Password
        </label>
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-neutral mt-4">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
