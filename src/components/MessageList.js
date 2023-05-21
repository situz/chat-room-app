import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      <h2>Chat Room</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.user}:</strong> {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;




