// src/pages/auth/Login.tsx
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("https://christful-server.vercel.app/login", {
        email: formData.email,
        password: formData.password,
      });

      setSuccess("Login successful!");
      console.log("Login Response:", res.data);

      // Optionally store token, then redirect
      localStorage.setItem("token", res.data.token);

      setTimeout(() => {
        navigate("/home"); // or home page
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-gray-800 text-2xl font-medium mb-6">Log in to Christful</h2>

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          className="w-full mb-4 p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none"
        />

        {/* Password */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 pr-10 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Forgotten password */}
        <div className="mb-4 text-right">
          <Link to="/forgot-password" className="text-sm text-gray-500 hover:underline">
            Forgotten Password?
          </Link>
        </div>

        {/* Submit button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-red-900 text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition"
        >
          {loading ? "Logging in..." : "Log in"}
        </button>

        {/* Feedback */}
        {error && <p className="mt-3 text-red-500">{error}</p>}
        {success && <p className="mt-3 text-green-600">{success}</p>}

        {/* Divider */}
        {/* Optional Social Login UI Here */}

        {/* Sign up prompt */}
        <div className="text-center mt-6">
          <Link to="/signup" className="text-blue-600 hover:underline">
            No account? Join Christful today
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
