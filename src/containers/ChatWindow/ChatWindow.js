import React from 'react';
import Header from '../../components/Header/Header';
import store from '../../store';
import Chats from '../Chats/Chats';
import _ from 'lodash';

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];

  return (
    <div className='ChatWindow'>
      <Header user={activeUser}/>
      <Chats messages={_.values(activeMessages)}/>
    </div>
  )
}

export default ChatWindow;
