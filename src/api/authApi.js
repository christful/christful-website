// api/authApi.js
import axios from "axios";

const API_URL = "https://christful-backend.vercel.app"; // replace with your backend URL

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (formData, setError, setSuccess, setLoading, navigate) => {
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const data = await axios.post(`${API_URL}/login`, {
        email: formData.email,
        password: formData.password,
      });

      setSuccess("Login successful!");
      console.log("Login Response:", data);

      // Optionally store token, then redirect
      if (data?.token) localStorage.setItem("token", data.token);

      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (err) {
      const error = err;
      setError(error?.response?.data?.message || error?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
