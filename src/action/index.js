import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE
} from '../constants/action-types';

export const setActiveUserId = activeUserId => (
  {
    type: SET_ACTIVE_USER_ID,
    payload: activeUserId
  }
);

export const setTypingValue = text => (
  {
    type: SET_TYPING_VALUE,
    payload: text
  }
);

export const sendMessage = (message, userId) => {
  return {
    type: SEND_MESSAGE,
    payload: {
      message,
      userId
    }
  }
};
