import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.message || 'Failed to fetch products');
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from server. Please check if your backend is running.');
    } else {
      // Something happened in setting up the request
      throw new Error('Error setting up the request');
    }
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to fetch product');
    } else if (error.request) {
      throw new Error('No response from server. Please check if your backend is running.');
    } else {
      throw new Error('Error setting up the request');
    }
  }
};

