import axios from 'axios';
import * as SecureStore from "expo-secure-store";
import { jwtDecode } from 'jwt-decode';
const API_URL = process.env.EXPO_PUBLIC_API_URL;

const login = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, user);
    const data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
}

const saveToken = async (token) => {
  try {
    await SecureStore.setItemAsync("token", token);
  } catch (error) {
    throw error;
  }
}

const getUserIdFromToken = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.userId;
  } catch (error) {
    throw error;
  }
}

const AuthService = {
  login,
  saveToken,
  getUserIdFromToken,
}

export default AuthService;



/* export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, { username, password });
    // store token in secure place
    return response.data;
  } catch (error) {
    throw error;
  }
}; */ 