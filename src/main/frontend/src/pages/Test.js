import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
        {isLoggedIn ? (
          <button onClick={handleLogout}>로그아웃</button>
        ) : (
          <button onClick={handleLogin}>로그인</button>
        )}
        
    </div>
  )
}

export default Test
