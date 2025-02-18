import React from 'react';

function KakaoLoginButton() {
  const KAKAO_CLIENT_ID = 'b8f42e7ca7621dd36afb2846a53293bf';
  const REDIRECT_URI = 'http://127.0.0.1:8080/api/user/kakao-login';
  
  const handleLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <button 
      onClick={handleLogin}
      style={{
        width: '100%',
        padding: '12px 0',
        backgroundColor: '#FEE500',
        color: '#000000',
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
      <img 
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png" 
        alt="카카오 로고" 
        style={{ marginRight: '10px', height: '20px' }}
      />
      카카오로 시작하기
    </button>
  );
}

export default KakaoLoginButton;