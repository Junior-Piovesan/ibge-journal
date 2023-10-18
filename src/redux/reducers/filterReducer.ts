import { UPDATE_FILTER } from '../actions/filterAction';

type ActionType = {
  type:string,
  payload: string
};

const INITIAL_STATE = {
  filter: ['mais-recentes'],
};

export const filterReducer = (state = INITIAL_STATE, action:ActionType) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
