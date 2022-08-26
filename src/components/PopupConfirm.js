import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor (popupSelector, btnConfirmSelector, handleDeleteCard) {
    super(popupSelector);
    this._btnConfirm = this._popup.querySelector(btnConfirmSelector);
    this._handleDeleteCard = handleDeleteCard;
  }

  //Расширяем родительский метод открытия поп-апа
  open(elm, cardId, card) {
    super.open();
    this._elm = elm;
    this._cardId = cardId;
    this._card = card;
  }

  setEventListeners() {
    //Вызываем метод родительного класса
    super.setEventListeners();
    //Расширяем метод родительского класса добавлением слушателя на кнопку Submit
    this._btnConfirm.addEventListener('click', () => {
      this._handleDeleteCard(this._cardId, this._card);
     })
   }
}