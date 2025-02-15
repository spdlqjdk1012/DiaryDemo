import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatRoomList from '../components/ChatRoomList';

const ChatPage = () => {
    const [socket, setSocket] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
  
      const ws = new WebSocket('ws://localhost:8080/ws');
      setSocket(ws);
  
      return () => {
        if (ws) ws.close();
      };
    }, [navigate]);
  
    if (!socket) return <div>연결 중...</div>;
  
    return <ChatRoomList socket={socket} />;
    
  };

export default ChatPage
