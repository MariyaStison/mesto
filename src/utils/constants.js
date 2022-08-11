//Определяем массиив с карточками
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Находим поп-апы, кнопку Редактирования профиля, кнопку Добавления места, кнопки закрытия поп-апов
export const popupEdit = document.querySelector('.popup_type_edit');
const popupView = document.querySelector('.popup_type_view');
export const popupAdd = document.querySelector('.popup_type_add');
export const btnEdit = document.querySelector('.btn_type_edit');
export const btnAdd = document.querySelector('.btn_type_add');
export const popupImg = popupView.querySelector('.popup__img');
export const popupImgTitle = popupView.querySelector('.popup__img-title');
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

//Селекторы
export const cardContainerSelector = '.elemets';
export const popupSelectoEdit = '.popup_type_edit';
export const popupSelectoAdd = '.popup_type_add';
export const popupSelectoView = '.popup_type_view';
export const popupOpenedSelector = '.popup_opened';
export const popupOpenedClassName = 'popup_opened';
export const popupActiveClassName = 'btn_active';
export const btnTypeCloseSelector = '.btn_type_close';
export const btnTypeLikeSelector = '.btn_type_like';
export const btnTypeDeleteSelector = '.btn_type_delete';
export const popupFormSelector = '.popup__form';
export const inputSelector = '.input';
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