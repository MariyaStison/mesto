import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor ({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll('.input');
    this._form = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
  // создаём пустой объект
    this._formValues = {};
  
  // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
        
  // возвращаем объект значений
    return this._formValues;
  }

  setEventListeners() {
    //Вызываем метод родительного класса
    super.setEventListeners();
    //Расширяем метод родительского класса добавлением слушателя на кнопку Submit
    this._popup.addEventListener('submit', (evt) => {
        evt.preventDefault();
        
        this._handleFormSubmit(this._getInputValues());
        
        this._form.reset();
      })
 }

 close() {
    super.close();
  
    //this._popup.classList.remove(popupOpenedClassName);
    //Удаляем "слушателей"
    //document.removeEventListener('keydown', this._handleEscClose);
    //document.removeEventListener('click', this._closePopupByClickOut);

    this._form.reset();
  }
}