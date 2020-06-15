import { SET_ACTIVE_USER_ID } from '../constants/action-types';

export const setActiveUserId = activeUserId => (
  {
    type: SET_ACTIVE_USER_ID,
    payload: activeUserId
  }
);
