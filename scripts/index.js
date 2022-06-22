//Создаем 6 карточек "по умолчанию"
//Определяем массиив с карточками
const initialCards = [
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

//Выбираем содержимое template
const elementTemplate = document.querySelector('#elemnt').content;

//Находим контейнер с карточками
const elementsContainer = document.querySelector('.elemets');

//Создаем карточки и заполняем содержимым
for (i = 0; i < initialCards.length; i = i + 1) {
  
  //Клонируем содержимое тега template
  const element = elementTemplate.querySelector('.elemnt').cloneNode(true);

  //Заполняем содержимым
  element.querySelector('.elemnt__img').src = initialCards[i].link;
  element.querySelector('.elemnt__title').textContent = initialCards[i].name;
  
  //Отображаем на странице
  elementsContainer.append(element);
}




//Находим поп-ап, кнопку Редактирования профиля, кнопку закрытия поп-апа
const popup = document.querySelector('.popup');
const editBtn = document.querySelector('.btn_type_edit');
const popupCloseBtn = document.querySelector('.btn_type_close');

// Находим форму в DOM
const formElement = document.querySelector('.popup__container');

// Находим поля формы в DOM
const nameInput = formElement.querySelector('.input_type_name');
const jobInput = formElement.querySelector('.input_type_about');

//Находим поля блока Profile, куда нужно будет встаить новые значения
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');

//Определяем функцию открытия поп-апа
function popupOpen () {  
    popup.classList.add('popup_opened');
    
    //Передаем значения провиля в поял формы
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
}

//Определяем функцию закрытия поп-апа
function popupClose () {
    popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const nameNew = nameInput.value;
    const aboutNew = jobInput.value;

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameNew;
    profileAbout.textContent = aboutNew;
    
    //закрываем поп-ап
    popupClose ();
}

//"Сулшаем" клик по кнопке редактирования профиля и открываем поп-ап при нажатии
editBtn.addEventListener('click', popupOpen);

//"Сулшаем" клик по кнопке закрытия поапа и закрываем поп-ап при нажатии
popupCloseBtn.addEventListener('click', popupClose);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);