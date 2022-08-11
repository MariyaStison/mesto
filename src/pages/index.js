//ИМПОРТ
import './index.css';
import {popupAdd, popupEdit,
  btnEdit, btnAdd, 
  initialCards,
  nameInput, jobInput, profileName, profileAbout, 
  templateSelector, popupSelectoEdit, popupSelectoAdd, popupSelectoView,
  validationConfig} from '../utils/constants.js';
import {Card} from '../components/Card.js';
import Section from '../components/Section.js';
import {cardContainerSelector} from '../utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';

//Функции
//Определяем функцию создания новой карточки
function generateCard(item) {
  const card = new Card(item.name, item.link, item.name, templateSelector, () => {
    const popupWithImage = new PopupWithImage(item.link, item.name, item.name, popupSelectoView);
      //Добавляем слушателя клика
      document.addEventListener('click', popupWithImage.handlePopupClose);
     
      popupWithImage.open();
  });
    const newCard = card.generateElement();
    return newCard;
  };

//Обработчики
//Создаем набор карточек по умолчанию
const elementList = new Section({
  items: initialCards,
  renderer: (item) => {
    elementList.addItem(generateCard(item)); 
  }},
  cardContainerSelector);

 elementList.renderItems();

//Включаем валидацию для форм
const formValidatorPopupAdd = new FormValidator(validationConfig, popupAdd);
  formValidatorPopupAdd.enableValidation();

const formValidatorPopupEdit = new FormValidator(validationConfig, popupEdit);
  formValidatorPopupEdit.enableValidation();

//"Слушаем" клик по кнопке редактирования профиля и открываем поп-ап при нажатии
btnEdit.addEventListener('click', function popupEditOpen() {
  
  //Создаем экземпляр класса User
  const user = new UserInfo(profileName.textContent, profileAbout.textContent);

  //Создаем экземпляр класса PopupWithForm    
    const formEdit = new PopupWithForm({
      popupSelector: popupSelectoEdit,
      handleFormSubmit: (formData) => {
      
      //Записываем новые данные пользователя
      user.setUserInfo(formData);
       
      //закрываем поп-ап
      formEdit.close();

      //Вызываем функцию, сбрасывающую ошибки валидации
      formValidatorPopupEdit.resetValidation();
      }
    })
  
    //Добавляем слушателя клика
    document.addEventListener('click', formEdit.handlePopupClose);
  
    //Открываем поп-ап редактирования профиля
    formEdit.open();

  //Заполняем поля формы текущими значениям из профиля
  nameInput.value = user.getUserInfo().name;
  jobInput.value = user.getUserInfo().info;
});

//"Слушаем" клик по кнопке добавления картинки и открываем поп-ап при нажатии
btnAdd.addEventListener('click', function() {
  
  const formAdd = new PopupWithForm({
    popupSelector: popupSelectoAdd,
    handleFormSubmit: (formData) => {
      
      elementList.addItem(generateCard(formData));
      
      //закрываем поп-ап
      formAdd.close();
    }
  });
   
  //Добавляем слушателя клика
  document.addEventListener('click', formAdd.handlePopupClose);

  formAdd.open();
    
  formValidatorPopupAdd.disableBtn();

  //Вызываем функцию, сбрасывающую ошибки валидации
  formValidatorPopupAdd.resetValidation();
});