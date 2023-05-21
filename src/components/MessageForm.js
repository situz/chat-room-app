import React, { useState } from 'react';

const MessageForm = ({ addMessage }) => {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage({ text: message, user: user });
    setMessage('');
  };
  

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;


