// services/api.js
import axios from 'axios';

const API_URL = 'http://192.168.1.92:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

export const getCategories = async () => {
  try {
    const response = await api.get('/products/getDressFashion');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to fetch categories');
  }
};
export const getSubCategories = async () => {
  try {
    const response = await api.get('/categories/sub');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to fetch categories');
  }
};

// Fetch products by category
export const getProductsByCategory = async (categoryId) => {
  try {
    const response = await api.get(`/products/category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to fetch products');
  }
};

export const getProducts = async () => {
  try {
    const response = await api.get(`/products/getDress`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to fetch products');
  }
};



