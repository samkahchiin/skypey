import React from 'react';
import logo from './logo.svg';
import Sidebar from './Sidebar';
import Main from './Main';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
