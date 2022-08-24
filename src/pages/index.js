//ИМПОРТ
import './index.css';
import {popupAdd, popupEdit, popupEditAvatar,
  btnEdit, btnAdd, btnEditAvatar, btnTypeSubmitSelector, 
  nameInput, jobInput, profileName, profileAbout, avatar,
  templateSelector, popupSelectoEdit, popupSelectoAdd, popupSelectoView, popupSelectoEditAvatar, popupSelectoConfirm, 
  btnTypeLikeSelector, popupActiveClassName, likeCounterSelector, 
  validationConfig} from '../utils/constants.js';
import {Card} from '../components/Card.js';
import Section from '../components/Section.js';
import {cardContainerSelector} from '../utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupConfirm from '../components/PopupConfirm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';

//Инициализация АПИ
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
  headers: {
    authorization: 'fe173521-ce0e-462c-827f-202e1a843a6d',
    'Content-Type': 'application/json'
  }
}); 

function initUser(userData) {
  const user = new UserInfo(userData.name, userData.about, userData.avatar, userData._id);
    user.setUserInfo(userData);
    user._userId = userData._id;
    return user;
}

function initSection(initialCards, userId) {
  const elementList = new Section({
    items: initialCards,
     renderer: (item) => {
     elementList.addItem(generateCard(item, userId));
     }},
    cardContainerSelector);
   return elementList;
}

 //Инициализируем классы поп-апов и добавляем "слушателей"
    const formEdit = new PopupWithForm({
      popupSelector: popupSelectoEdit,
      handleFormSubmit: (formData) => {
      
        formEdit.renderLoding(true, 'Сохранение...', 'Сохранить');

        //Записываем новые данные пользователя
        api.patchUserData(formData)
          .then((result) => {
            profileName.textContent = result.name;
            profileAbout.textContent = result.about;
          })
          .catch(function(res) {
            console.log('Произошла ошибка при сохранении данных пользователя: ' + res);
          })
          .finally(() => {
            formEdit.renderLoding(false, 'Сохранение...', 'Сохранить');
          })

     //закрываем поп-ап
    formEdit.close();

     //Вызываем функцию, сбрасывающую ошибки валидации
    formValidatorPopupEdit.resetValidation();
    }
   });
    //Добавляем слушателя клика      
    formEdit.setEventListeners();
 
  const formEditAvatar = new PopupWithForm({
    popupSelector: popupSelectoEditAvatar,
    handleFormSubmit: (formData) => {
       
      formEditAvatar.renderLoding(true, 'Сохранение...', 'Сохранить');

      //Записываем новые данные пользователя
       api.patchAvatar(formData)
       .then((result) => {
          avatar.src = result.avatar;
        })
         .catch(function(res) {
           console.log('Произошла ошибка при сохранении данных пользователя: ' + res);
          })
         .finally(() => {
           formEditAvatar.renderLoding(false, 'Сохранение...', 'Сохранить');
         })

   //закрываем поп-ап
   formEditAvatar.close();

    //Вызываем функцию, сбрасывающую ошибки валидации
    formValidatorPopupEditAvatar.resetValidation();
   }
  });
   //Добавляем слушателя клика      
   formEditAvatar.setEventListeners();
 

//Получаем данные о пользователе и создаем пользователя
api.getUserData()
  .then((result) => {
     return initUser(result);
  })
  .then((user) => {
     //"Слушаем" клик по кнопке редактирования профиля и открываем поп-ап при нажатии
    btnEdit.addEventListener('click', function popupEditOpen() {
   
      //Открываем поп-ап редактирования профиля
      formEdit.open();

      //Заполняем поля формы текущими значениям из профиля
      nameInput.value = user.getUserInfo().name;
      jobInput.value = user.getUserInfo().info;
    });
    return user;
  })
  .catch(function(res) {
    console.log(`Произошла ошибка при загрузке данных пользователя: ` + res);
  })
  //Получаем данные карточек и создаем карточки
    .then((user) => {
      api.getInitialCards()
       .then((result) => { 
          initSection(result, user._userId).renderItems(); 
          return initSection(result); 
       })
       .catch(function(res) {
         console.log(`Произошла ошибка при загрузки карточек: ` + res);
        })
        .then((res) => {
          //Инициализируем поп-ап добавления картинки
          const formAdd = new PopupWithForm({
            popupSelector: popupSelectoAdd,
            handleFormSubmit: (formData) => {
              
              formAdd.renderLoding(true, 'Создание...', 'Создать')
        
              api.postNewCard(formData)
               .then(result => {
                  res.addItem(generateCard(result, user._userId));
                })
                .catch(function(res) {
                  console.log(`Произошла ошибка при сохранении карточки: ` + res);
                 })
                .finally(() => {
                  formAdd.renderLoding(true, 'Создание...', 'Создать');
                });
                        
              //закрываем поп-ап
              formAdd.close();
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
        })
    });

//Функции
//Определяем функцию создания новой карточки
function generateCard(item, userId) {
  const card = new Card(item.name, item.link, item.name, item.likes, item.id, item.owner._id, templateSelector, 
    () => {    
      popupWithImage.open(item.name, item.link, item.name);
    }, () => {
      formConfirm.open(newCard, card.cardId);
    }, () => {
        newCard.querySelector(btnTypeLikeSelector).classList.toggle(popupActiveClassName);
        if (newCard.querySelector(btnTypeLikeSelector).classList.contains(popupActiveClassName)) {
          api.putLike(card.cardId)
            .then((result) => {
              newCard.querySelector(likeCounterSelector).textContent = result.likes.length;
            })
            .catch(function(res) {
              console.log(`Произошла ошибка при сохранении лайка: ` + res);
             });
        } else {
          api.deleteLike(card.cardId)
            .then((result) => {
              newCard.querySelector(likeCounterSelector).textContent = result.likes.length;
            })
            .catch(function(res) {
              console.log(`Произошла ошибка при удалении лайка: ` + res);
            });
        }
      }
  );
  card.cardId = item._id;
  card.ownerId = item.owner._id;
  
  const newCard = card.generateElement();

  //Скрываем иконку Удалить для чужих карточек
  if (card.ownerId != userId) {
    //console.log(newCard.querySelector('.btn_type_delete').classList);
    newCard.querySelector('.btn_type_delete').classList.add('btn_hidden');
  }

  return newCard;
  };

////Инициализация классов
const popupWithImage = new PopupWithImage(popupSelectoView);

const formConfirm = new PopupConfirm(popupSelectoConfirm, btnTypeSubmitSelector, 
  (cardId) => {
    api.deleteCard(cardId)
      .then(() => {
        formConfirm.handleDeleteElement();
      })
      .catch(function(res) {
        console.log(`Произошла ошибка при удалении карточки: ` + res);
      });
});
//Добавляем слушателя клика
formConfirm.setEventListeners()

//Добавляем слушателя клика
popupWithImage.setEventListeners();

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
