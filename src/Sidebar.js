import React from 'react';
import './Sidebar.css';
import User from './User';

// destructuring props to contacts
const Sidebar = ({ contacts }) => {
  return (
    <aside className='Sidebar'>
      {
        contacts.map(contact => {
          return <User user={contact} key={contact.user_id}/>
        })
      }
    </aside>
  )
};

export default Sidebar;
