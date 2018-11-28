import fetch from 'isomorphic-fetch';
import config from '../config/app';
import {
  GET_ACCOUNTS,
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_FAILURE,
  POST_ACCOUNTS,
  POST_ACCOUNTS_SUCCESS,
  POST_ACCOUNTS_FAILURE
} from '../constants/actions';
import { openMessageAction } from './message.action';
import { destoryAuthAction } from './auth.action';
import Store from '../store';
import Api from '../lib/api.js'

export function getAccounts() {
  return dispatch => {
    (async() => {
      try {
        let accounts = await Api.getAccounts()
        dispatch(getAccountsSuccess(accounts));
      } catch (e) {
        dispatch(openMessageAction(e.error, 'error'));
      }
    })();
  }
}

export function getAccountsSuccess(data) {
  return {
    type: GET_ACCOUNTS_SUCCESS,
    payload: {
      data: data
    }
  }
}

export function getAccountsFail() {
  return {
    type: GET_ACCOUNTS_FAILURE
  }
}

export function createAccount(data) {
  return dispatch =>
    fetch(`${config.baseUrl}/accounts`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `session-token ${Store.getState().auth.token}`
      }
    }).then(res => res.json()).then(res => {
      dispatch(createAccountSuccess(res));
      return res;
    }).catch(res => {
      dispatch(openMessageAction(res.error, 'error'));
    });
}

export function createAccountSuccess(data) {
  return {
    type: POST_ACCOUNTS,
    payload: {
      data: data
    }
  }
}

export function createAccountFail() {
  return {
    type: POST_ACCOUNTS_FAILURE
  }
}

export function logoutAction() {
  return dispatch => {
    Api.logOut()
    window.location.hash = 'login';
    dispatch(destoryAuthAction());
  }
}
