import fetch from 'isomorphic-fetch';
import Api from '../lib/api.js'
import config from '../config/app';
import {openMessageAction} from '../actions/message.action';
import {setAuthAction} from '../actions/auth.action';
import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_AJAX_START
} from '../constants/actions';

export function loginStartAction(username, password) {
  return dispatch => {
    dispatch(loginAjaxStartAction());
    (async () => {
      try {
        let user = await Api.logIn(username, password)
        dispatch(setAuthAction(user));
        dispatch(loginSuccessAction());
        dispatch(openMessageAction('登录成功', 'success'));
        window.location.hash = '/';
      } catch (e) {
        dispatch(loginFailedAction());
        dispatch(openMessageAction(e.message, 'error'));
      }
    })();
  }
}

function loginAjaxStartAction() {
    return {
      type: LOGIN_AJAX_START
    }
}

function loginSuccessAction() {
  return {
    type: LOGIN_SUCCESS
  };
}

function loginFailedAction() {
  return {
    type: LOGIN_FAILURE
  };
}
