import React from 'react'
import { useNavigate } from 'react-router-dom'

const Test = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  }
  return (
    <div>
        main
        <button onClick={handleLogin}>로그인</button>
    </div>
  )
}

export default Test
