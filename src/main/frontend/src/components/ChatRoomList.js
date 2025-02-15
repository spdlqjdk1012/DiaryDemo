import React, { useState, useEffect } from 'react';
import CreateRoomModal from './CreateRoomModal';

const ChatRoomList = ({ socket }) => {
  const [rooms, setRooms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (socket) {
         // 소켓 연결 후 방 목록 요청
        console.log("소켓연결완료: 방리스트 요청")
        socket.send(JSON.stringify({
            protocol: 'REQUEST_ROOM_LIST'
        }));

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.protocol === 'ROOM_LIST') {
            setRooms(data.rooms);
        }
      };
    }
  }, [socket]);

  const handleJoinRoom = (roomId) => {
    socket.send(JSON.stringify({
      protocol: 'JOIN_ROOM',
      roomId: roomId
    }));
    // 채팅방 화면으로 이동
    window.location.href = `/chat/${roomId}`;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">채팅방 목록</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          채팅방 만들기
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div
            key={room.roomId}
            className="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
            onClick={() => handleJoinRoom(room.roomId)}
          >
            {room.imageUrl && (
              <img
                src={room.imageUrl}
                alt={room.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
            )}
            <h3 className="font-semibold text-lg mb-2">{room.name}</h3>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{room.type === 'GROUP' ? '그룹채팅' : '1:1채팅'}</span>
              <span>참여자 {room.currentUsers}/{room.maxUsers}</span>
            </div>
          </div>
        ))}
      </div>

      <CreateRoomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        socket={socket}
      />
    </div>
  );
};

export default ChatRoomList