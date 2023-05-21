import React from 'react';

// MessageList component, received messages prop from parent component
const MessageList = ({ messages }) => {
  // Renders a list of messages that contains both the user's name and their message
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




