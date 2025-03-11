import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/user';
//const BASE_URL = 'https://light-dolls-repair.loca.lt/api/user';

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

export const logout = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/logout`);
    
    // 로그아웃 성공 시 로컬 스토리지의 인증 정보 삭제
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('nickname');
    localStorage.removeItem('cuid');
    
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: '로그아웃 중 오류가 발생했습니다.' };
  }
};