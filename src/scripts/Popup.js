import {popupOpenedSelector, btnTypeCloseSelector, popupOpenedClassName}  from '../utils/constants.js';

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
    
  open() {
    this._popup.classList.add(popupOpenedClassName);
    this.setEventListeners();
  }

  //Публичный метод закрытия поп-апа 
  close() {
    this._popup.classList.remove(popupOpenedClassName);
    //Удаляем "слушателей"
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('click', this._closePopupByClickOut);
    this._popup.querySelector(btnTypeCloseSelector).removeEventListener('click', this.close.bind(this));   
  }
  
  //Приватный метод закрытия поп-ап по нажатию клавиши Esc
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
       this.close();
    }
  }

  //Приватный метод закрытия поп-ап по клику вне поп-апа
 _closePopupByClickOut = (evt) => {
    if (evt.target.classList.contains('popup') === true) {
        if (evt.target.closest(popupOpenedSelector) != null) {
          this.close();
        }
      }
  }

  setEventListeners() {
     //Добавляем "слушатель" для нажатия на кнопку Esc
     document.addEventListener('keydown', this._handleEscClose);
     //Добавляем "слушатель" для клика вне поп-апа
     document.addEventListener('click', this._closePopupByClickOut);
     //Добавляем "слушатель" для кнопку Закрыть
     this._popup.querySelector(btnTypeCloseSelector).addEventListener('click', this.close.bind(this));
  }
}