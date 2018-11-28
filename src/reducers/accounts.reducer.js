import {
  GET_ACCOUNTS_SUCCESS
} from '../constants/actions';

let switchMap = [];

let initialState = {
  data: []
};

switchMap[GET_ACCOUNTS_SUCCESS] = (state, action) => {
  return Object.assign({}, state, {
    data: action.payload.data
  });
};

export default (state = initialState, action) => {
  if (switchMap[action.type]) {
    return switchMap[action.type](state, action);
  } else{
    return state;
  }
}
