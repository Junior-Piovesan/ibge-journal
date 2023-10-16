import { AnyAction } from 'redux';
import {
  ADD_FAVORITES,
  INITIAL_FAVORITES,
  REMOVE_FAVORITES,
  UPDATE_USER,
} from '../actions/userAction';
import { NewsType } from '../../types';

// type ActionType = {
//   type:string,
//   payload: {
//     user:string,
//     email:string,
//     favorite:NewsType
//   }
// };

const INITIAL_REDUCER = {
  user: 'Profile',
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
        .filter((news:NewsType) => news.id !== action.payload.favorite.id);
      return {
        ...state,
        favorites: newArray,
      };
    }
    case INITIAL_FAVORITES:
      return {
        ...state,
        favorites: action.payload.favorite,
      };
    default:
      return state;
  }
};

export default userReducer;
