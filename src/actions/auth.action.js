import {
  SET_AUTH,
  DESTORY_AUTH
} from '../constants/actions';

export function setAuthAction(user) {
  return {
    type: SET_AUTH,
    payload: {
      user: user
    }
  }
}

export function destoryAuthAction() {
  return {
    type: DESTORY_AUTH
  }
}

