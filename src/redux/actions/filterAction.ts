export const UPDATE_FILTER = 'UPDATE_FILTER';

export const updateFilterAction = (filter:string) => {
  return {
    type: UPDATE_FILTER,
    payload: filter,
  };
};
