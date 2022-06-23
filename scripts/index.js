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

//Работа с поп-апами
//Находим поп-апы, кнопку Редактирования профиля, кнопку Добавления места, кнопку закрытия поп-апа

const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup__edit');
const popupAdd = document.querySelector('.popup__add');
const popupView = document.querySelector('.popup__view');
const editBtn = document.querySelector('.btn_type_edit');
const addBtn = document.querySelector('.btn_type_add');
const popupCloseBtns = document.querySelectorAll('.btn_type_close');
const likeBtns = document.querySelectorAll('.btn_type_like');
const deleteBtns = document.querySelectorAll('.btn_type_delete');
const elementImgs = document.querySelectorAll('.elemnt__img');

// Находим форму в DOM
const editFormElement = popupEdit.querySelector('.popup__container');
const addFormElement = popupAdd.querySelector('.popup__container');

// Находим поля формы в DOM
const nameInput = editFormElement.querySelector('.input_type_name');
const jobInput = editFormElement.querySelector('.input_type_about');
const titleInput = addFormElement.querySelector('.input_type_name');
const linkInput = addFormElement.querySelector('.input_type_about');

//Находим поля блока Profile, куда нужно будет встаить новые значения
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');

//Находим поля блока Elemnt, куда нужно будет встаить новые значения
const elementTitle = document.querySelector('.elemnt__title');
const elementLink = document.querySelector('.elemnt__img');

//Определяем функцию, открывающую нужный поп-ап
function popupOpen (evt) {
    const targetType = evt.target.classList;

    if (targetType.contains('btn_type_edit')) {
      popupEdit.classList.add('popup_opened');
    } else {
        if (targetType.contains('btn_type_add')) {
            popupAdd.classList.add('popup_opened');
        } else {
          if (targetType.contains('elemnt__img')) {
            popupView.classList.add('popup_opened');
          }
        }
      }
}

//Определяем функцию закрытия поп-апа
function popupClose (evt) {
    evt.target.closest('.popup').classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function editFormSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.

    // Получите значение полей jobInput и nameInput из свойства value
    const nameNew = nameInput.value;
    const aboutNew = jobInput.value;

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameNew;
    profileAbout.textContent = aboutNew;
    
    //закрываем поп-ап
    popupClose (evt);
}

//Функция для добавления новой карточки
function addFormSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
    //Клонируем template
    const element = elementTemplate.querySelector('.elemnt').cloneNode(true);
    
        // Получите значение полей jobInput и nameInput из свойства value
    const titleNew = titleInput.value;
    const linkNew = linkInput.value;

    //Заполняем содержимым
    element.querySelector('.elemnt__img').src = linkNew;
    element.querySelector('.elemnt__title').textContent = titleNew;
  
    //Отображаем на странице
    elementsContainer.prepend(element);

    element.querySelector('.elemnt__img').addEventListener('click', popupViewOpen);
    
    //закрываем поп-ап
    popupClose (evt);
}

//Определим функцию для активации \ неактиваии кнопки Лайк
function toggleLike (evt) {
  evt.target.classList.toggle('btn_active');
}

//Определим функцию для удаления картинки
function deleteElement (evt) {
    evt.target.closest('.elemnt').remove();
}

//Определим функцию для открытия поп-ап просмотра картинки 
function popupViewOpen(evt) {

  //Вызываем функцию открытия поп-апа
  popupOpen(evt);

  //Определяем целевую карточку
  targetElement = evt.target.closest('.elemnt');

  //Находим в целевой карточки ссылку на картинку и заголовок
  targetLink = targetElement.querySelector('.elemnt__img');
  targetTitle = targetElement.querySelector('.elemnt__title');

  //Находим нужные DOM эдементы в поп-апе
  popupImg = popupView.querySelector('.popup__img');
  popupImgTitle = popupView.querySelector('.popup__img-title');

  //Передаем картинку и заголовок
  popupImg.src = targetLink.src;
  popupImgTitle.textContent = targetTitle.textContent;
  };

//"Слушаем" клик по кнопке редактирования профиля и открываем поп-ап при нажатии
editBtn.addEventListener('click', function popupEditOpen (evt) {
    //Вызываем функцию открытия поп-апа
    popupOpen (evt);

    //Передаем значения провиля в поля формы
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
});

//"Слушаем" клик по кнопке добавления картинки и открываем поп-ап при нажатии
addBtn.addEventListener('click', popupOpen);

//"Слушаем" клик по кнопке закрытия поапа и закрываем поп-ап при нажатии
popupCloseBtns.forEach((item) => {
  item.addEventListener('click', popupClose);
});

//"Слушаем" клик по кнопке like
likeBtns.forEach((item) => {
    item.addEventListener('click', toggleLike);
});

//"Слушаем" клик по кнопке Удалить
deleteBtns.forEach((item) => {
    item.addEventListener('click', deleteElement);
});

//"Слушаем" клик по кнопке картинке
elementImgs.forEach((item) => {
  item.addEventListener('click', popupViewOpen);
});


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editFormElement.addEventListener('submit', editFormSubmitHandler);

addFormElement.addEventListener('submit', addFormSubmitHandler);