import React, { useEffect, useState } from 'react';

function KakaoCallback() {
  const [status, setStatus] = useState('처리 중...');
  
  useEffect(() => {
    // URL에서 인가코드 추출
    const code = new URL(window.location.href).searchParams.get('code');
    
    if (!code) {
      setStatus('오류: 인가 코드가 없습니다');
      return;
    }
    
    // 백엔드로 인가코드 전송
    fetch('http://localhost:8080/api/auth/kakao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('로그인 처리 중 오류가 발생했습니다');
      }
      return response.json();
    })
    .then(data => {
      // 토큰과 사용자 정보 저장
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // 메인 페이지로 리다이렉트
      window.location.href = '/';
    })
    .catch(error => {
      console.error('카카오 로그인 오류:', error);
      setStatus(`오류: ${error.message}`);
    });
  }, []);
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h2>{status}</h2>
      {status.includes('오류') && (
        <button 
          onClick={() => window.location.href = '/login'}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          로그인 페이지로 돌아가기
        </button>
      )}
    </div>
  );
}

export default KakaoCallback;