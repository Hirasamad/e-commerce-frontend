import API from "./api";

// ✅ User Signup API
export const signupUser = async (userData) => {
  try {
    const response = await API.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data?.message || error.message);
    throw error;
  }
};

// ✅ User Login API
export const loginUser = async (userData) => {
  try {
    const response = await API.post("/auth/login", userData);
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data?.message || error.message);
    throw error;
  }
};
