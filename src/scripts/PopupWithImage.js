import Popup from "./Popup.js"
import {popupImg, popupImgTitle, popupOpenedClassName} from '../utils/constants.js';

export default class PopupWithImage extends Popup {
    constructor(image, title, alt, popupSelector) {
        super(popupSelector);
        this._image = image;
        this._title = title;
        this._alt  = alt;
    }

    open() {
    //Передаем картинку и заголовок
      popupImg.src = this._image;
      popupImgTitle.textContent = this._title;
      popupImg.alt = this._alt;
         
     //Открываем поп-ап и добавляем
     this._popup.classList.add(popupOpenedClassName);
     super.setEventListeners();
    }
}