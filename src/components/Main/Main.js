import React from 'react';
import './Main.css';
import Empty from '../Empty/Empty';
import ChatWindow from '../../containers/ChatWindow/ChatWindow';

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    return activeUserId ? <ChatWindow activeUserId={activeUserId}/> :
      <Empty user={user} activeUserId={activeUserId}/>;
  }

  return <main className='Main'>{renderMainContent()}</main>
};

export default Main;
