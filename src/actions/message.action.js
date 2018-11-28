import {
  OPEN_MESSAGE,
  CLOSE_MESSAGE
} from '../constants/actions';

export function openMessageAction(content = '', type = 'info') {
  return {
    type: OPEN_MESSAGE,
    payload: {
      show: true,
      type: type,
      content: content
    }
  }
}

export function closeMessageAction () {
  return {
    type: CLOSE_MESSAGE
  }
}
