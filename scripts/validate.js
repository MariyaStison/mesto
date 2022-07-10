//Определяем переменные для валидации
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.input',
  submitButtonSelector: '.btn_type_submit',
  inactiveButtonClass: 'btn_inactive',
  inputErrorClass: 'input_type_error',
  errorClass: 'input-error_active'
};

 //Определяем функцию, отвечающую за установку "слушателей" на поля ввода
const setEventListeners = (formElement, inputSelector, submitButtonSelector, inputErrorClass, errorClass, inactiveButtonClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    
   toggleButtonState(inputList, buttonElement, inactiveButtonClass);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
  };

 //Определяем функцию, отвечающую за включение валидации
 const enableValidation = ({formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    
    formList.forEach((formElement) => {
      formElement.addEventListener('sibmit', function (evt) {
        evt.preventDefault();
         });
      setEventListeners(formElement, inputSelector, submitButtonSelector, inputErrorClass, errorClass, inactiveButtonClass);
    });
  };

//Определяем функцию для добавления класса ошибки полю ввода
const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
  
  
  //Определяем функцию для удаления класса ошибки у поля ввода
  const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };
  
  
  //Определяем функцию для проверка валидности заполнения формы
  const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  };

//Определяем функцию, проверяющую наличие невалидных данных в полях  
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  });
  };
  
//Определяем функцию, отвечающую за активности/неактивность кнокпи отправки формы по результатам валидации
  const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
  } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
  }; 
  };

 //Определяем функцию, блокирующую кнопку отправки формы поп-апа
 const disableBtn = (submitButton, inactiveButtonClass) => {
  submitButton.disabled = true;
  submitButton.classList.add(inactiveButtonClass);
 };
 
 //Определяем функцию, сбрасывающую ошибки
 const resetValidation = (popup, validationConfig) => {
  popup.querySelectorAll(validationConfig.inputSelector).forEach((item) => {
  hideInputError(popup, item, validationConfig.inputErrorClass, validationConfig.errorClass);
 });
}

  //Вызываем функцию, отвечающую за включение валидации
  enableValidation(validationConfig);