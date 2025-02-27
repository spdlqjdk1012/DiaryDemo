import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import KakaoLoginButton from '../components/KakaoLoginButton';
import NaverLoginButton from '../components/NaverLoginButton';
import GoogleLoginButton from '../components/GoogleLoginButton';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 입력값 검증
    if (!email.trim()) {
      setError('이메일을 입력해주세요.');
      return;
    }
    
    if (!password.trim()) {
      setError('비밀번호를 입력해주세요.');
      return;
    }

    // 이메일 형식 검증
    const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
    if (!emailRegex.test(email)) {
      setError('올바른 이메일 형식이 아닙니다.');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      
      const response = await login(email, password);
      
      if (response.result === 'success') {
        // 토큰 저장
        localStorage.setItem('token', response.token);
        localStorage.setItem('email', response.email);
        localStorage.setItem('nickname', response.nickname);
        localStorage.setItem('cuid', response.cuid);
        
        // 로그인 성공 후 메인 페이지로 이동
        navigate('/');
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError(error.message || '로그인 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            로그인
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">이메일</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="이메일"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">비밀번호</label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="비밀번호"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
            >
              {isLoading ? '로그인 중...' : '로그인'}
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
          <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            회원가입하기
          </a>
        </div>

        <KakaoLoginButton/>
        <NaverLoginButton/>
        <GoogleLoginButton/>
      </div>
    </div>
  );
};

export default Login
