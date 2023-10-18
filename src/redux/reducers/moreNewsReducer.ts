import { COUNT_MORE, RESET_COUNT } from '../actions/moreNewsAction';

type ActionType = {
  type: string;
  payload: number;
};

const INITIAL_STATE = {
  moreNews: 9,
};

const moreNewsReducer = (state = INITIAL_STATE, action:ActionType) => {
  switch (action.type) {
    case COUNT_MORE:
      return {
        ...state,
        moreNews: state.moreNews + action.payload,
      };
    case RESET_COUNT:
      return {
        ...state,
        moreNews: 10,
      };
    default:
      return state;
  }
};

export default moreNewsReducer;
