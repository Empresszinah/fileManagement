import axios from 'axios';

const baseURL = 'https://fileapp.onrender.com/';

export const GetUserProfile = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetAllUserProfile = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/user/all/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
