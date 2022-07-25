//Определяем переменные для валидации
export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.input',
    submitButtonSelector: '.btn_type_submit',
    inactiveButtonClass: 'btn_inactive',
    inputErrorClass: 'input_type_error',
    errorClass: 'input-error_active'
  };
  
  export class FormValidator {
    constructor (validationConfig, form) {
      this._formSelector = validationConfig.formSelector,
      this._inputSelector = validationConfig.inputSelector,
      this._submitButtonSelector = validationConfig.submitButtonSelector,
      this._inactiveButtonClass = validationConfig.inactiveButtonClass,
      this._inputErrorClass = validationConfig.inputErrorClass,
      this._errorClass = validationConfig.errorClass,
      this._form = form
    };

    //Приватный метод, устанавливающий слушателей по поля ввода
    _setEventListeners = (formElement,
          inputSelector,
          submitButtonSelector,
          inputErrorClass,
          errorClass,
          inactiveButtonClass) => {
        const inputList = Array.from(formElement.querySelectorAll(inputSelector));
        const buttonElement = formElement.querySelector(submitButtonSelector);
        
        this._toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    
        inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(this._form, inputElement, inputErrorClass, errorClass);
            this._toggleButtonState(inputList, buttonElement, inactiveButtonClass);
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
    _showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
      const _errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(inputErrorClass);
      _errorElement.textContent = errorMessage;
      _errorElement.classList.add(errorClass);
    };
      
    //Приватный метод для проверки валидности заполнения формы
    _checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
      if (!inputElement.validity.valid) {
        this._showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
      } else {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass);
      }
    };

    //Приватный метод, проверяющий наличие невалидных данных в полях
    _hasInvalidInput(inputList) {
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    };

    //Приватный метод, отвечающий за активности/неактивность кнопки отправки формы по результатам валидации
    _toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
      if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true;
      } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.disabled = false;
      }; 
    };
}

//Функция  для удаления класса ошибки у поля ввода (вне класса, т.к. используется в resetValidation)
const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

//Функция, блокирующая кнопку отправки формы поп-апа
export const disableBtn = (submitButton, inactiveButtonClass) => {
    submitButton.disabled = true;
    submitButton.classList.add(inactiveButtonClass);
  };

//Функция, сбрасывающая ошибки
export const resetValidation = (popup, validationConfig) => {
    popup.querySelectorAll(validationConfig.inputSelector).forEach((item) => {
    hideInputError(popup, item, validationConfig.inputErrorClass, validationConfig.errorClass);
    });
  };