import React from 'react';
import axios from 'axios';

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    const clientId = '591838263861-khs699q1690jec198bd2aost4rnlljl4.apps.googleusercontent.com';
    const redirectUri = 'http://127.0.0.1:8080/api/user/google-login';
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    
    // 명시적으로 스코프 URL 지정
    const scope = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid';
    
    const params = {
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: scope,
      access_type: 'offline',
      include_granted_scopes: 'true',
      prompt: 'select_account consent'
    };
    
    const queryString = Object.keys(params)
      .map(key => `${key}=${encodeURIComponent(params[key])}`)
      .join('&');
      
    window.location.href = `${googleAuthUrl}?${queryString}`;
  };
  
  // 로그인 결과 처리 함수
  const handleLoginCallback = async (code) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8080/api/user/google-login?code=${code}`);
      const { token, user, isNewUser } = response.data;
      
      // 토큰 저장
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      // 사용자 상태에 따라 다른 페이지로 리다이렉트
      if (isNewUser) {
        window.location.href = '/onboarding';
      } else {
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Google login error:', error);
      alert('로그인 처리 중 오류가 발생했습니다.');
    }
  };

  return (
    <button 
      onClick={handleGoogleLogin}
      className="google-login-button"
      style={{
        backgroundColor: '#fff',
        color: '#757575',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '10px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto, Arial, sans-serif',
        fontWeight: '500',
        cursor: 'pointer',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.25)',
        transition: 'background-color .218s, border-color .218s, box-shadow .218s',
        width: '240px'
      }}
    >
      <img 
        src="https://developers.google.com/identity/images/g-logo.png" 
        alt="Google Logo"
        style={{ width: '18px', height: '18px', marginRight: '10px' }}
      />
      Google 계정으로 로그인
    </button>
  );
};

export default GoogleLoginButton;