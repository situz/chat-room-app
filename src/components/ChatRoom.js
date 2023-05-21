import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text, user) => {
    const newMessage = { text, user };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };
  

  return (
    <div className="chat-room">
      <MessageList messages={messages} />
      <MessageForm addMessage={addMessage} />
    </div>
  );
};

export default ChatRoom;


