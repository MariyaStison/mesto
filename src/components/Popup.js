export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
    
  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }

  //Публичный метод закрытия поп-апа 
  close() {
    
    this._popup.classList.remove('popup_opened');
    //Удаляем "слушателей"
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('click', this._handlePopupClose);
  }
  
  //Приватный метод закрытия поп-ап по нажатию клавиши Esc
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
       this.close();
    }
  }

  //Приватный метод закрытия поп-ап по клику вне поп-апа
  _handlePopupClose = (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('btn_type_close')) {
    this.close()
  }
}

  setEventListeners() {
     //Добавляем "слушатель" для нажатия на кнопку Esc
     document.addEventListener('keydown', this._handleEscClose);
     //Добавляем "слушатель" для клика вне поп-апа и кнопки Close
     document.addEventListener('click', this._handlePopupClose);
  }
}