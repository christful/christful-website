// api/authApi.js
import axios from "axios";

const API_URL = "https://christful-backend.vercel.app"; // replace with your backend URL

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  localStorage.setItem("token", response.data.token);
  return response.data;
}