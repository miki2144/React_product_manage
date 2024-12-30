import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Adjust with your backend URL

// API calls for products
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

// API calls for cart
export const getCart = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/cart/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart", error);
    throw error;
  }
};

export const addToCart = async (userId, productId, quantity) => {
  try {
    const response = await axios.post(`${API_URL}/cart/add`, { userId, productId, quantity });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart", error);
    throw error;
  }
};

// Authentication API calls
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user", error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Error logging in user", error);
    throw error;
  }
};

// Payment API calls
export const createPaymentIntent = async (amount) => {
  try {
    const response = await axios.post(`${API_URL}/payment/create-payment-intent`, { amount });
    return response.data;
  } catch (error) {
    console.error("Error creating payment intent", error);
    throw error;
  }
};
