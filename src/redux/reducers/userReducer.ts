import { UPDATE_USER } from '../actions/userAction';

type ActionType = {
  type:string,
  payload: {
    user:string,
    email:string,
  }
};

const INITIAL_REDUCER = {
  user: 'Profile',
  Email: '',
};

const userReducer = (state = INITIAL_REDUCER, action:ActionType) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload.user,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

export default userReducer;
