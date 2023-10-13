import {
  REQUEST_STARTED,
  REQUEST_SUCESS,
  REQUEST_FAIL,
} from '../actions/recentsNewsAction';

type ActionType = {
  type: string;
  payload: number;
};

const globalNews = {
  news: [],
  loading: true,
  error: false,
};

const recentsNewsReducer = (state = globalNews, action: ActionType) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
      };

    case REQUEST_SUCESS:
      return {
        ...state,
        news: action.payload,
        loading: false,
      };

    case REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default recentsNewsReducer;
