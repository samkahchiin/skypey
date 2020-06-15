import { combineReducers } from 'redux';
import user from './user';
import contacts from './contacts';
import activeUserId from './activeUserId';
import messages from './messages';
import typing from './typing';

// combineReducers takes in an object => shape is exactly like the state object of the application
// NOTE: When using combineReducers, the value returned from each reducer is not the state of the application.
// It is only the value of the particular key they represent in the state object!

export default combineReducers({
  user,
  contacts,
  activeUserId,
  typing,
  messages
});
