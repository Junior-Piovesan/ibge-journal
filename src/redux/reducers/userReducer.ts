import { AnyAction } from 'redux';
// import { NewsType } from '../../types';
import {
  ADD_FAVORITES,
  INITIAL_FAVORITES,
  REMOVE_FAVORITES,
  UPDATE_USER,
} from '../actions/userAction';

// type ActionType = {
//   type:string,
//   payload: {
//     user:string,
//     email:string,
//     favorite:NewsType
//   }
// };

const INITIAL_REDUCER = {
  user: '',
  email: '',
  favorites: [],
};

const userReducer = (state = INITIAL_REDUCER, action:AnyAction) => {
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
        favorites: [...state.favorites, action.payload.favorite],
      };
    case REMOVE_FAVORITES: {
      const newArray = state.favorites
        .filter((news) => news !== action.payload.favorite);
      return {
        ...state,
        favorites: newArray,
      };
    }
    case INITIAL_FAVORITES:
      return {
        ...state,
        favorites: action.type.favorite,
      };
    default:
      return state;
  }
};

export default userReducer;
