//ИМПОРТ
import {Card} from './Card.js';
//import {validationConfig, FormValidator, disableBtn, resetValidation} from './FormValidator.js';
import {validationConfig, FormValidator} from './FormValidator.js';
import {initialCards} from './data.js';

//Переменные
//Находим поп-апы, кнопку Редактирования профиля, кнопку Добавления места, кнопки закрытия поп-апов
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
export const popupView = document.querySelector('.popup_type_view');
const btnEdit = document.querySelector('.btn_type_edit');
const btnAdd = document.querySelector('.btn_type_add');
const popupCloseBtns = document.querySelectorAll('.btn_type_close');
//Определяем шаблон карточки
const templateSelector = '#elemnt';

// Находим контейнеры форм в DOM
const formElementEdit = popupEdit.querySelector('.popup__container');
const formElementAdd = popupAdd.querySelector('.popup__container');

//Находим форму
const formAdd = formElementAdd.querySelector('.popup__form');

// Находим поля форм в DOM
const nameInput = formElementEdit.querySelector('.input_type_name');
const jobInput = formElementEdit.querySelector('.input_type_about');
const nameAdd = formElementAdd.querySelector('.input_type_name');
const linkAdd = formElementAdd.querySelector('.input_type_about');

//Находим поля блока Profile, куда нужно будет встаить новые значения
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');

//Находим контейнер с карточками
const elementsContainer = document.querySelector('.elemets');

//Функции
//Определяем функцию создания новой карточки
function generateCard(item) {
  const card = new Card(item.name, item.link, item.name, templateSelector);
    const newCard = card.generateElement();
    return newCard;
  };

//Определяем функцию добавления карточки на страницу
function renderElement(elm) {
  elementsContainer.prepend(elm);
};

//Определяем функцию, закрывающую поп-ап по нажатию на Esc
function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(evt.currentTarget.querySelector('.popup_opened'));
  }
};

//Определяем функцию, закрывающую поп-ап по клику вне поп-апа
function closePopupByClickOut(evt) {
  if (evt.target.classList.contains('popup') === true) {
    if (evt.target.closest('.popup_opened') != null) {
      closePopup(evt.target.closest('.popup_opened'));
    }
  }
};

//Определяем функцию, открывающую нужный поп-ап
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    //Добавляем "слушатель" для нажатия на кнопку Esc
    document.addEventListener('keydown', closePopupByEsc);
    //Добавляем "слушатель" для клика вне поп-апа
    document.addEventListener('click', closePopupByClickOut);
  };

//Определяем функцию закрытия поп-апа
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    //Удаляем "слушателей"
    document.removeEventListener('keydown', closePopupByEsc);
    document.removeEventListener('click', closePopupByClickOut);
};

//Определяем функцию для редактирования профиля
function editFormSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    
    //закрываем поп-ап
    closePopup(popupEdit);
};

//Определяем функцию для добавления новой карточки
function addFormSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  
  const newElementInput = {
    name: nameAdd.value,
    link: linkAdd.value,
    alt: nameAdd.value
  };

  //Вызываем функцию создания нового элемента-карточки и добавления элемента на страницу
  renderElement(generateCard(newElementInput));
  
  //закрываем поп-ап
  closePopup(popupAdd);
  
  //Сбрасываем введенные параметры
  formAdd.reset();
};

//Обработчики
//Создаем набор карточек по умолчанию
initialCards.forEach((item) => {
  renderElement(generateCard(item));
});

//Включает валидацию для форм
const formValidatorPopupAdd = new FormValidator(validationConfig, popupAdd);
  formValidatorPopupAdd.enableValidation();

const formValidatorPopupEdit = new FormValidator(validationConfig, popupEdit);
  formValidatorPopupEdit.enableValidation();

//"Слушаем" клик по кнопке редактирования профиля и открываем поп-ап при нажатии
btnEdit.addEventListener('click', function popupEditOpen() {
    //Вызываем функцию открытия поп-апа
    openPopup(popupEdit);

    //Передаем значения провиля в поля формы
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;

    //Вызываем функцию, сбрасывающую ошибки валидации
    formValidatorPopupEdit.resetValidation();
});

//"Слушаем" клик по кнопке добавления картинки и открываем поп-ап при нажатии
btnAdd.addEventListener('click', function() {
  openPopup(popupAdd);
  formValidatorPopupAdd.disableBtn();

  //Вызываем функцию, сбрасывающую ошибки валидации
  formValidatorPopupAdd.resetValidation();
});

//"Слушаем" клик по кнопке закрытия поапа и закрываем поп-ап при нажатии
popupCloseBtns.forEach((item) => {
  item.addEventListener('click', function (evt) {
  closePopup (evt.target.closest('.popup'));
});
});

// Прикрепляем обработчики к форме
formElementEdit.addEventListener('submit', editFormSubmitHandler);
formElementAdd.addEventListener('submit', addFormSubmitHandler);