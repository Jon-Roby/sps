// import { GET_LOGIN_STATUS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case "GET_LOGIN_STATUS":
      return action.payload;
  }
  return state;
}
