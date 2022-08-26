//ИМПОРТ
import './index.css';
import {popupAdd, popupEdit, popupEditAvatar,
  btnEdit, btnAdd, btnEditAvatar, btnTypeSubmitSelector, 
  nameInput, jobInput, cardContainerSelector, 
  templateSelector, popupSelectoEdit, popupSelectoAdd, popupSelectoView, popupSelectoEditAvatar, popupSelectoConfirm, 
  validationConfig} from '../utils/constants.js';
import {Card} from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupConfirm from '../components/PopupConfirm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';

//Инициализируем АПИ
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
  headers: {
    authorization: 'fe173521-ce0e-462c-827f-202e1a843a6d',
    'Content-Type': 'application/json'
  }
});

//Инициализируем классы и добавляем слушателй
//User
 const user = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar');

//Section
 const elementList = new Section((item) => {
   elementList.addItem(generateCard(item, user.userId));
   },
   cardContainerSelector);

//PopupWithForm - Edit
 const formEdit = new PopupWithForm({
  popupSelector: popupSelectoEdit,
  handleFormSubmit: (formData) => {
    
    formEdit.renderLoding(true, 'Сохранение...');
       
    //Записываем новые данные пользователя
    api.patchUserData(formData)
      .then((result) => {
        user.setUserInfo(result);
        
        //закрываем поп-ап
        formEdit.close();

        //Сбрасываем форму
        formEdit.reset();
       
        //Вызываем функцию, сбрасывающую ошибки валидации
        formValidatorPopupEdit.resetValidation(); 
      })
      .catch(function(res) {
        console.log('Произошла ошибка при сохранении данных пользователя: ' + res);
      })
      .finally(() => {
        formEdit.renderLoding(false, 'Сохранить');
      })
   }
 });

  //Добавляем слушателя клика      
  formEdit.setEventListeners();

 //"Слушаем" клик по кнопке редактирования профиля и открываем поп-ап при нажатии
  btnEdit.addEventListener('click', function popupEditOpen() {
 
    //Открываем поп-ап редактирования профиля
    formEdit.open();

    //Заполняем поля формы текущими значениям из профиля
    nameInput.value = user.getUserInfo().name;
    jobInput.value = user.getUserInfo().info;
  });

//PopupWithForm - Add
  const formAdd = new PopupWithForm({
    popupSelector: popupSelectoAdd,
    handleFormSubmit: (formData) => {
      
      formAdd.renderLoding(true, 'Создание...')

      api.postNewCard(formData)
       .then(result => {
          elementList.addItem(generateCard(result, user.userId));
          //закрываем поп-ап
          formAdd.close();
          //Сбрасываем форму
          formAdd.reset();
        })
        .catch(function(res) {
          console.log(`Произошла ошибка при сохранении карточки: ` + res);
         })
        .finally(() => {
          formAdd.renderLoding(true, 'Создать');
        });
    }
 });

  //Добавляем слушателя клика для кнопок на поп-апе
  formAdd.setEventListeners();

  //"Слушаем" клик по кнопке добавления картинки и открываем поп-ап при нажатии
  btnAdd.addEventListener('click', function() {

    formAdd.open();

    formValidatorPopupAdd.disableBtn();

    //Вызываем функцию, сбрасывающую ошибки валидации
    formValidatorPopupAdd.resetValidation();
  });

//PopupWithImage
 const popupWithImage = new PopupWithImage(popupSelectoView);

//PopupConfirm
 const formConfirm = new PopupConfirm(popupSelectoConfirm, btnTypeSubmitSelector, 
   (cardId, card) => {
     api.deleteCard(cardId)
       .then(() => {
         card.deleteElement();
         formConfirm.close();
       })
       .catch(function(res) {
         console.log(`Произошла ошибка при удалении карточки: ` + res);
       });
 });
 //Добавляем слушателя клика
 formConfirm.setEventListeners()
 
 //Добавляем слушателя клика
 popupWithImage.setEventListeners();
 
//PopupWithForm - EditAvatar
const formEditAvatar = new PopupWithForm({
    popupSelector: popupSelectoEditAvatar,
    handleFormSubmit: (formData) => {
       
      formEditAvatar.renderLoding(true, 'Сохранение...');

      //Записываем новые данные пользователя
       api.patchAvatar(formData)
       .then((result) => {
          user.setUserInfo(result);

           //закрываем поп-ап
          formEditAvatar.close();

          //Вызываем функцию, сбрасывающую ошибки валидации
          formValidatorPopupEditAvatar.resetValidation(); 
        })
        .catch(function(res) {
           console.log('Произошла ошибка при сохранении данных пользователя: ' + res);
          })
        .finally(() => {
           formEditAvatar.renderLoding(false, 'Сохранить');
         })
   }
  });
   //Добавляем слушателя клика      
   formEditAvatar.setEventListeners();
 

//Получаем данные с сервера и отрисовываем страницу
Promise.all([
   api.getUserData(), 
   api.getInitialCards()]) 
.then(([userInfo, initialCards]) => { 
  user.setUserInfo(userInfo);
  elementList.renderItems(initialCards);
})
.catch((err) => {
  console.log(`Произошла ошибка при загрузкt данных: ` + err);
 })

//Определяем функцию создания новой карточки
function generateCard(item, userId) {
  const card = new Card(item.name, item.link, item.name, item.likes, item._id, item.owner._id, templateSelector, 
    () => {    
      popupWithImage.open(item.name, item.link, item.name);
    }, () => {
      formConfirm.open(newCard, card.cardId, card);
    }, () => {
      if (newCard.querySelector('.btn_type_like').classList.contains('btn_active')) {
        api.deleteLike(card.cardId)
         .then((result) => {
           card.toggleLike(result.likes);
        })
        .catch(function(res) {
          console.log(`Произошла ошибка при удалении лайка: ` + res);
        });
      } else {
        api.putLike(card.cardId)
            .then((result) => {
              card.toggleLike(result.likes);
            })
            .catch(function(res) {
              console.log(`Произошла ошибка при сохранении лайка: ` + res);
             });
      }
    }
  );

  const newCard = card.generateElement();

  //Скрываем иконку Удалить для чужих карточек
  if (card.ownerId != userId) {
    card.hideBtnDetele();
  }
  return newCard;
  };

//Включаем валидацию для форм
const formValidatorPopupAdd = new FormValidator(validationConfig, popupAdd);
  formValidatorPopupAdd.enableValidation();

const formValidatorPopupEdit = new FormValidator(validationConfig, popupEdit);
  formValidatorPopupEdit.enableValidation();

const formValidatorPopupEditAvatar = new FormValidator(validationConfig, popupEditAvatar);
  formValidatorPopupEditAvatar.enableValidation(); 

//"Слушаем" клик по кнопке обновления аватара и открываем поп-ап при нажатии
btnEditAvatar.addEventListener('click', function popupEditAvatarOpen() {
   
  //Открываем поп-ап обновления аватара
  formEditAvatar.open();
});

