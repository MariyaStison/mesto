import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(image, title, alt, popupSelector) {
        super(popupSelector);
        this._image = image;
        this._title = title;
        this._alt  = alt;
        this._popupImg = this._popup.querySelector('.popup__img');
        this._popupImgTitle = this._popup.querySelector('.popup__img-title');
    }

    open() {
    //Передаем картинку и заголовок
      this._popupImg.src = this._image;
      this._popupImgTitle.textContent = this._title;
      this._popupImg.alt = this._alt;
       
      
    ///Открываем поп-ап и добавляем слушателей, вызывая метод родительского класса
    super.open();
    }
}