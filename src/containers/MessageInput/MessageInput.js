import React from 'react';
import store from '../../store';
import { setTypingValue } from '../../action';
import './MessageInput.css';

const MessageInput = ({ value }) => {
  function handleChange (e) {
    store.dispatch(setTypingValue(e.target.value));
  };

  return (
    <form className='Message'>
      <input type='text'
        className='Message__input'
        onChange={handleChange}
        value={value}
        placeholder='Write something here...'
      />
    </form>
  );
};

export default MessageInput;
