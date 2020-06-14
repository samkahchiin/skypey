import { generateUser } from '../static-data';

export default function (state = generateUser(), action) {
  return state;
};
