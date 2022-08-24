//Находим поп-апы, кнопку Редактирования профиля, кнопку Добавления места, кнопки закрытия поп-апов
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_add');
export const popupEditAvatar = document.querySelector('.popup_type_edit-avatar');
export const popupConfirm = document.querySelector('.popup_type_confirm');
export const btnEdit = document.querySelector('.btn_type_edit');
export const btnAdd = document.querySelector('.btn_type_add');
export const btnEditAvatar = document.querySelector('.btn_type_edit-avatar');
export const avatar = document.querySelector('.profile__avatar');

//Определяем шаблон карточки
export const templateSelector = '#elemnt';

// Находим контейнеры форм в DOM
const formElementEdit = popupEdit.querySelector('.popup__container');

// Находим поля форм в DOM
export const nameInput = formElementEdit.querySelector('.input_type_name');
export const jobInput = formElementEdit.querySelector('.input_type_about');

//Находим поля блока Profile, куда нужно будет встаить новые значения
export const profileName = document.querySelector('.profile__title');
export const profileAbout = document.querySelector('.profile__subtitle');
export const profileAvatar = document.querySelector('.profile__avatar');

//Селекторы
export const cardContainerSelector = '.elemets';
export const popupSelectoEdit = '.popup_type_edit';
export const popupSelectoAdd = '.popup_type_add';
export const popupSelectoView = '.popup_type_view';
export const popupSelectoEditAvatar = '.popup_type_edit-avatar';
export const popupSelectoConfirm = '.popup_type_confirm';
export const popupOpenedSelector = '.popup_opened';
export const popupActiveClassName = 'btn_active';
export const btnTypeLikeSelector = '.btn_type_like';
export const btnTypeDeleteSelector = '.btn_type_delete';
export const btnTypeSubmitSelector = '.btn_type_submit';
export const likeCounterSelector = '.elemnt__like-counter';
const popupFormSelector = '.popup__form';
const inputSelector = '.input';
export const elementImgSelector = '.elemnt__img';
export const elementTitleSelector = '.elemnt__title';

//Определяем переменные для валидации
export const validationConfig = {
    formSelector: popupFormSelector,
    inputSelector: inputSelector,
    submitButtonSelector: '.btn_type_submit',
    inactiveButtonClass: 'btn_inactive',
    inputErrorClass: 'input_type_error',
    errorClass: 'input-error_active'
  };