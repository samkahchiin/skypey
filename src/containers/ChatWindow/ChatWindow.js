import React from 'react';
import Header from '../../components/Header/Header';
import store from '../../store';

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];

  return (
    <div className='ChatWindow'>
      <Header user={activeUser}/>
    </div>
  )
}

export default ChatWindow;
