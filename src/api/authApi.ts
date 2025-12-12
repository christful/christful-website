import axios from "axios";

const API_URL = "https://christful-backend.vercel.app"; // replace with your backend URL

export interface RegisterData {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const registerUser = async (userData: RegisterData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (credentials: LoginData, setError: unknown, setSuccess: unknown, setLoading: unknown, navigate: unknown) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};
