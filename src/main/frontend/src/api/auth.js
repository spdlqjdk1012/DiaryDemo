import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/user';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: '로그인 중 오류가 발생했습니다.' };
  }
};