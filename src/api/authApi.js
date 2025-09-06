// api/authApi.js
import axios from "axios";

const API_URL = "https://christful-server.vercel.app"; // replace with your backend URL

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};
