  export default class FormValidator {
    constructor (validationConfig, form) {
      this._formSelector = validationConfig.formSelector,
      this._inputSelector = validationConfig.inputSelector,
      this._submitButtonSelector = validationConfig.submitButtonSelector,
      this._inactiveButtonClass = validationConfig.inactiveButtonClass,
      this._inputErrorClass = validationConfig.inputErrorClass,
      this._errorClass = validationConfig.errorClass,
      this._form = form,
      this._submitButton = this._form.querySelector(this._submitButtonSelector),
      this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector)),
      this._buttonElement = this._form.querySelector(this._submitButtonSelector)
    }

    //Приватный метод, устанавливающий слушателей по поля ввода
    _setEventListeners = () => {
              
        this._toggleButtonState();
    
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
          });
        });
      };

    //Публичный метод, отвечающий за включение валидации
    enableValidation() {
        this._setEventListeners(this._form,
          this._inputSelector,
          this._submitButtonSelector,
          this._inputErrorClass,
          this._errorClass,
          this._inactiveButtonClass);
    };

   //Приватный метод для добавления класса ошибки полю ввода
    _showInputError = (inputElement, errorMessage) => {
      const _errorElement = this._form.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      _errorElement.textContent = errorMessage;
      _errorElement.classList.add(this._errorClass);
    };
      
    //Приватный метод для проверки валидности заполнения формы
    _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    };

    //Приватный метод, проверяющий наличие невалидных данных в полях
    _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    };

    //Приватный метод, отвечающий за активности/неактивность кнопки отправки формы по результатам валидации
    _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
      } else {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.disabled = false;
      }; 
    };

  //Приватный метод для удаления класса ошибки у поля ввода
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  //Публичный метод, блокирующий кнопку отправки формы поп-апа
  disableBtn() {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._inactiveButtonClass);
  };

  //Публичный метод, сбрасывающий ошибки
  resetValidation() {
    this._inputList.forEach((item) => {
    this._hideInputError(item);
    });
  };
}