import AV from 'leancloud-storage'
import { leancloud  } from '../config/app.js'

AV.init({
  appId: leancloud.appId,
  appKey: leancloud.appKey
})

const Account = AV.Object.extend('Account')

export default {
  currentUser() {
    let user = null
    try {
      user = AV.User.current()
    } catch (e) {}

    return user
  },
  logIn(username,  password) {
    return AV.User.logIn(username, password)
  },
  logOut() {
    AV.User.logOut()
  },
  getAccounts() {
    let query = new AV.Query('Account')
    query.limit(10)
    query.skip(0)
    return query.first()
  },
  deleteAccount() {},
  editAccount() {}
}

