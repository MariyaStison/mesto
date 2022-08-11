import Popup from "./Popup.js";
import {inputSelector, btnTypeCloseSelector, popupOpenedClassName, popupFormSelector}  from '../utils/constants.js';

export default class PopupWithForm extends Popup {
  constructor ({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    //document.querySelector(popupSelector).addEventListener('submit', this._handleFormSubmit);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    // достаём все элементы полей
    this._inputList = this._popup.querySelectorAll(inputSelector);

  // создаём пустой объект
    this._formValues = {};

  // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
  
  // возвращаем объект значений
    return this._formValues;
  }

  setEventListeners() {
    //Добавляем "слушатель" для нажатия на кнопку Esc
    document.addEventListener('keydown', this._handleEscClose);
    //Добавляем "слушатель" для клика вне поп-апа
    document.addEventListener('click', this._closePopupByClickOut);
    //Добавляем "слушатель" для кнопку Закрыть
    this._popup.querySelector(btnTypeCloseSelector).addEventListener('click', this.close.bind(this))
    this._popup.addEventListener('submit', (evt) => {
        evt.preventDefault();
        
        this._handleFormSubmit(this._getInputValues());
        
        this._popup.querySelector(popupFormSelector).reset();
      })
 }

 close() {
    this._popup.classList.remove(popupOpenedClassName);
    //Удаляем "слушателей"
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('click', this._closePopupByClickOut);
    
    this._popup.querySelector(popupFormSelector).reset();
  }
}