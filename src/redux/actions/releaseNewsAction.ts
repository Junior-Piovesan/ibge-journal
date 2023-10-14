import { Dispatch } from '../../types';
import { fetchNewsRelease } from '../../utils/fetchs';
import {
  requestStarted,
  requestSuccessful,
  requestFail,
} from './recentsNewsAction';

export const fetchReleaseAction = () => {
  return async (dispatch:Dispatch) => {
    dispatch(requestStarted());
    try {
      const data = await fetchNewsRelease();
      dispatch(requestSuccessful(data));
    } catch (error: any) {
      dispatch(requestFail());
    }
  };
};
