import React from 'react';

// MessageForm component, received onSubmit event handler and state info as props
const MessageForm = ({ user, setUser, message, setMessage, handleSubmit }) => {
  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={user}
        // Sets User state with event object's value
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        // Sets Message state with event object's value
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;



