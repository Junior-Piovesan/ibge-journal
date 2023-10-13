import { Dispatch, NewsType } from '../../types';
import { fetchNews } from '../../utils/fetchs';

export const GET_RECENTS_NEWS = 'GET_RECENTS_NEWS';

export const REQUEST_STARTED = 'REQUEST_STARTED';

export const REQUEST_SUCESS = 'REQUEST_SUCESS';

export const REQUEST_FAIL = 'REQUEST_FAIL';

export const requestStarted = () => {
  return { type: REQUEST_STARTED };
};

export const requestSuccessful = (news:NewsType[]) => {
  return {
    type: REQUEST_SUCESS,
    payload: news,
  };
};

export const requestFail = () => {
  return {
    type: REQUEST_FAIL,
    payload: true,
  };
};

export const fetchRecentsNews = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestStarted());
    try {
      const data = await fetchNews();
      dispatch(requestSuccessful(data));
    } catch (error: any) {
      requestFail();
    }
  };
};
