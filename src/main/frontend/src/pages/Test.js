import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../api/auth'
import { Link } from 'react-router-dom';
const Test = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);//token 있으면 true 없으면 false
  }, []);

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  }

  const handleLogout = async () => {
    await logout();
    setIsLoggedIn(false);
    navigate("/login");
  }
  return (
    <div>
        main
        <img 
          src="https://brip.s3.ap-northeast-2.amazonaws.com/598823fd-32f3-47fa-95d4-cddedf341ca6_s.png" 
          alt="프로필 이미지" 
        />
        {isLoggedIn ? (
          <button onClick={handleLogout}>로그아웃</button>
        ) : (
          <button onClick={handleLogin}>로그인</button>
        )}
        <Link to="/inquiryList">문의</Link>
    </div>
  )
}

export default Test
