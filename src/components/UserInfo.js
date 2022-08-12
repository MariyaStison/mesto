import {profileName, profileAbout} from '../utils/constants.js';

export default class UserInfo {
    constructor (userName, userInfo) {
       this._userName = userName;
       this._userInfo = userInfo;
    }

    getUserInfo() {
      this._user = {
        name: this._userName,
        info: this._userInfo
      };
      return this._user;
    }

    setUserInfo(data) {
        profileName.textContent = data.name;
        profileAbout.textContent = data.about;
        this._userName = data.name;
        this._userInfo = data.about;
    }
}