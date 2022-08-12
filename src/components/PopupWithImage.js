import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImg = this._popup.querySelector('.popup__img');
        this._popupImgTitle = this._popup.querySelector('.popup__img-title');
    }

    open(name, link) {
    //Передаем картинку и заголовок
      this._popupImg.src = link;
      this._popupImgTitle.textContent = name;
      this._popupImg.alt = name;
       
      
    ///Открываем поп-ап и добавляем слушателей, вызывая метод родительского класса
    super.open();
    }
}