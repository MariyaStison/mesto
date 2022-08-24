import {profileName, profileAbout, profileAvatar} from '../utils/constants.js';

export default class UserInfo {
    constructor (userName, userInfo, userAvatar, userId) {
       this._userName = userName;
       this._userInfo = userInfo;
       this._userAvatar = userAvatar;
       this._userId = userId;
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
        profileAvatar.src = data.avatar;
        this._userName = data.name;
        this._userInfo = data.about;
        this._userAvatar = data.avatar;
    }
}