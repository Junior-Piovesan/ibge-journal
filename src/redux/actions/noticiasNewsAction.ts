import { Dispatch } from '../../types';
import { fetchNewsNoticia } from '../../utils/fetchs';

import {
  requestStarted,
  requestSuccessful,
  requestFail,
} from './recentsNewsAction';

export const fetchNoticiasAction = () => {
  return async (dispatch:Dispatch) => {
    dispatch(requestStarted());
    try {
      const data = await fetchNewsNoticia();
      dispatch(requestSuccessful(data));
    } catch (error) {
      dispatch(requestFail());
    }
  };
};
