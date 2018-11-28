import {
  OPEN_MESSAGE,
  CLOSE_MESSAGE
} from '../constants/actions';

const initialState = {
  content: '',
  type: 'error',
  show: false
};

let switchMap = {};

switchMap[OPEN_MESSAGE] = (state, action) => {
  return Object.assign({}, state, {
    show: true,
    content: action.payload.content,
    type: action.payload.type
  });
};

switchMap[CLOSE_MESSAGE] = (state) => {
  return Object.assign({}, state, {
    show: false
  });
};

export default (state = initialState, action) => {
  if (switchMap[action.type]) {
    return switchMap[action.type](state, action);
  } else {
    return state;
  }
}
