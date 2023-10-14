export const UPDATE_USER = 'UPDATE_USER';

export const userUpdateAction = (profile:{ user:string, email:string }) => {
  return {
    type: UPDATE_USER,
    payload: profile,
  };
};
