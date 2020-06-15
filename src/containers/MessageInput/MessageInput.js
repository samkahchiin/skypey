import React from 'react';
import store from '../../store';
import { setTypingValue, sendMessage } from '../../action';
import './MessageInput.css';

const MessageInput = ({ value }) => {
  function handleChange (e) {
    store.dispatch(setTypingValue(e.target.value));
  };

  function handleSubmit (e) {
    e.preventDefault();
    const { typing, activeUserId } = store.getState();
    store.dispatch(sendMessage(typing, activeUserId));
  }

  return (
    <form className='Message' onSubmit={handleSubmit}>
      <input
        className='Message__input'
        onChange={handleChange}
        value={value}
        placeholder='Write something here...'
      />
    </form>
  );
};

export default MessageInput;
