import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

// Chat Room Top Level Component
const ChatRoom = () => {
  // States: Array of messages, User's names
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  // Function to add a new message to our array of messages
  const addMessage = () => {
    const newMessage = { text: message, user: user };
    setMessages([...messages, newMessage]);
  };

  // Function for handling submissions from MessageForm. Adds the new message, and resets state of user and message to empty string.
  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage();
    setUser('');
    setMessage('');
  };
  
  // Renders container that has MessageList and MessageForm components. Passes state info as props to child components.
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


