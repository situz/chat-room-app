import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');


  const addMessage = () => {
    const newMessage = { text: message, user: user };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage();
    setUser('');
    setMessage('');
  };
  

  return (
    <div className="chat-room">
      <MessageList messages={messages} />
      <MessageForm
        user={user}
        setUser={setUser}
        message={message}
        setMessage={setMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ChatRoom;


