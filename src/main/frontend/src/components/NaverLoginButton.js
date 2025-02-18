import React, { useEffect, useState } from 'react';

function NaverLoginButton() {
  const NAVER_CLIENT_ID = 'UZgFqw43EZdedZq0USWx';
  const REDIRECT_URI = 'http://127.0.0.1:8080/api/user/naver-login';
  const [state, setState] = useState('');
  
  useEffect(() => {
    // 랜덤 state 생성 및 저장
    const randomState = Math.random().toString(36).substring(2, 15);
    localStorage.setItem('naverOAuthState', randomState);
    setState(randomState);
  }, []);
  
  const handleLogin = () => {
    const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${state}`;
    window.location.href = naverAuthUrl;
  };

  return (
    <button 
      onClick={handleLogin}
      style={{
        width: '100%',
        padding: '12px 0',
        backgroundColor: '#03C75A',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}
    >
      <span style={{ marginRight: '10px' }}>N</span>
      네이버로 시작하기
    </button>
  );
}

export default NaverLoginButton;