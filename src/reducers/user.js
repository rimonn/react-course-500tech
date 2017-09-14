import * as consts from '../consts/action-types';

const initialState = {
  name: 'Unknown'
};

const reducer = (user = initialState, action) => {
  switch (action.type) {
    case consts.SET_USER:
      return action.payload

    default:
      return user;
  }
};

export default reducer;