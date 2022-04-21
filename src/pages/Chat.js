import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const Chat = () => {
  const [currentSocket, setCurrentSocket] = useState();
  useEffect(() => {
    setCurrentSocket(socketIOClient("localhost:5000"));
  }, []);

  return (
    <div>
      <div>메시지 맵 돌리는 부분</div>
      <input type="text"/><button >전송</button>
    </div>
  );
};

export default Chat;
