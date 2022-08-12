export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
    
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  //Публичный метод закрытия поп-апа 
  close() {
    this._popup.classList.remove('popup_opened');
    //Удаляем "слушателей"
    document.removeEventListener('keydown', this._handleEscClose);
  }
  
  //Приватный метод закрытия поп-ап по нажатию клавиши Esc
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
       this.close();
    }
  }

  //Публичный метод закрытия поп-ап по клику вне поп-апа
  _handlePopupClose = (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('btn_type_close')) {
    this.close()
  }
}

  setEventListeners() {
     //Добавляем "слушатель" для нажатия на кнопку Закрыть и клика вне поп-апа
     document.addEventListener('click', this._handlePopupClose);
  }
}