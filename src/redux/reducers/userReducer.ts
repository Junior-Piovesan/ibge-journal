import { NewsType } from '../../types';
import { ADD_FAVORITES, REMOVE_FAVORITES, UPDATE_USER } from '../actions/userAction';

type ActionType = {
  type:string,
  payload: {
    user:string,
    email:string,
    favorites:NewsType[]
  }
};

const INITIAL_REDUCER = {
  user: '',
  email: '',
  favorites: [],
};

const userReducer = (state = INITIAL_REDUCER, action:ActionType) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload.user,
        email: action.payload.email,
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.favorites],
      };
    case REMOVE_FAVORITES: {
      const newArray = state.favorites
        .filter((news) => news !== action.payload.favorites);
      return {
        ...state,
        favorites: [...newArray],
      };
    }
    default:
      return state;
  }
};

export default userReducer;
