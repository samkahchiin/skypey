import { getMessages } from '../static-data';

export default function (state = getMessages(10), action) {
  return state;
}
