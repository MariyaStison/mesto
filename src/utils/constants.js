//Находим поп-апы, кнопку Редактирования профиля, кнопку Добавления места, кнопки закрытия поп-апов
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_add');
export const popupEditAvatar = document.querySelector('.popup_type_edit-avatar');
export const btnEdit = document.querySelector('.btn_type_edit');
export const btnAdd = document.querySelector('.btn_type_add');
export const btnEditAvatar = document.querySelector('.btn_type_edit-avatar');

//Определяем шаблон карточки
export const templateSelector = '#elemnt';

// Находим контейнеры форм в DOM
const formElementEdit = popupEdit.querySelector('.popup__container');

// Находим поля форм в DOM
export const nameInput = formElementEdit.querySelector('.input_type_name');
export const jobInput = formElementEdit.querySelector('.input_type_about');

//Селекторы
export const cardContainerSelector = '.elemets';
export const popupSelectoEdit = '.popup_type_edit';
export const popupSelectoAdd = '.popup_type_add';
export const popupSelectoView = '.popup_type_view';
export const popupSelectoEditAvatar = '.popup_type_edit-avatar';
export const popupSelectoConfirm = '.popup_type_confirm';;
export const btnTypeSubmitSelector = '.btn_type_submit';
const popupFormSelector = '.popup__form';
const inputSelector = '.input';

//Определяем переменные для валидации
export const validationConfig = {
    formSelector: popupFormSelector,
    inputSelector: inputSelector,
    submitButtonSelector: '.btn_type_submit',
    inactiveButtonClass: 'btn_inactive',
    inputErrorClass: 'input_type_error',
    errorClass: 'input-error_active'
  };