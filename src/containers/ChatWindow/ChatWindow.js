import React from 'react';
import Header from '../../components/Header/Header';
import store from '../../store';
import Chats from '../Chats/Chats';
import MessageInput from '../MessageInput/MessageInput';
import './ChatWindow.css';
import _ from 'lodash';

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const { typing } = state;
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];

  return (
    <div className='ChatWindow'>
      <Header user={activeUser}/>
      <Chats messages={_.values(activeMessages)}/>
      <MessageInput value={typing}/>
    </div>
  )
}

export default ChatWindow;
