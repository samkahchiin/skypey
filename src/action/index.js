import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE } from '../constants/action-types';

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
