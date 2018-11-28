import {
  SET_AUTH,
  DESTORY_AUTH
} from '../constants/actions';

const initialState = {
  user: null, // AV user instance
};

let switchMap = {};

switchMap[SET_AUTH] = (state, action) => {
  return Object.assign({}, state, {
    user: action.payload.user,
  });
};

switchMap[DESTORY_AUTH] = (state) => {
  return Object.assign({}, state, {
    user: null
  });
};

export default (state = initialState, action) => {
  if (switchMap[action.type]) {
    return switchMap[action.type](state, action);
  } else{
    return state;
  }
}
