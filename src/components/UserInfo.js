export default class UserInfo {
    constructor (profileNameSelector, profileAboutSelector, profileAvatarSelector) {
       this._profileName = document.querySelector(profileNameSelector);
       this._profileAbout = document.querySelector(profileAboutSelector);
       this._profileAvatar = document.querySelector(profileAvatarSelector);
    }

    getUserInfo() {
      this._user = {
        name: this._profileName.textContent,
        info: this._profileAbout.textContent
      };
      return this._user;
    }

    setUserInfo(data) {
        this._profileName.textContent = data.name;
        this._profileAbout.textContent = data.about;
        this._profileAvatar.src = data.avatar;
        this.userId = data._id;
    }
}