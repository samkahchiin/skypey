import { getMessages } from '../static-data';
import { SEND_MESSAGE } from '../constants/action-types';
import _ from 'lodash';

export default function (state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const otherMessages = state[userId];
      // The + is to ensure that the result is converted to number
      // instead of string
      const number = +_.keys(otherMessages).pop() + 1;

      return {
        ...state,
        [userId]: {
          ...otherMessages,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
    default:
      return state;
  }
}
