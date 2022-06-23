//Переменные
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

  //Находим поп-апы, кнопку Редактирования профиля, кнопку Добавления места, кнопку закрытия поп-апа
const popupEdit = document.querySelector('.popup__edit');
const popupAdd = document.querySelector('.popup__add');
const popupView = document.querySelector('.popup__view');
const btnEdit = document.querySelector('.btn_type_edit');
const btnAdd = document.querySelector('.btn_type_add');
const popupCloseBtns = document.querySelectorAll('.btn_type_close');

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

//Выбираем содержимое template
const elementTemplate = document.querySelector('#elemnt').content;

//Находим контейнер с карточками
const elementsContainer = document.querySelector('.elemets');

//Функции
//Определяем функцию для создания нового элемента-карточки
function createElement (newTitle, newLink) {
  //Клонируем содержимое тега template
  const element = elementTemplate.querySelector('.elemnt').cloneNode(true);
  
  //Находим элементы DOM
  const elementImg = element.querySelector('.elemnt__img');
  const elementTitle = element.querySelector('.elemnt__title');
  const elementLikeBtn = element.querySelector('.btn_type_like');
  const elementDeleteBtn = element.querySelector('.btn_type_delete');

  //Заполняем содержимым
  elementImg.src = newLink;
  elementTitle.textContent = newTitle;

  //Отображаем на странице
  elementsContainer.prepend(element);

  //Добавляем "слушателей"
  elementImg.addEventListener('click', openPopupView);
  elementLikeBtn.addEventListener('click', toggleLike);
  elementDeleteBtn.addEventListener('click', deleteElement);
};

//Определяем функцию, открывающую нужный поп-ап
function openPopup (evt) {
    const targetType = evt.target.classList;

    if (targetType.contains('btn_type_edit')) {
      popupEdit.classList.add('popup_opened');
    } else {
        if (targetType.contains('btn_type_add')) {
            popupAdd.classList.add('popup_opened');
        } 
        else {
          if (targetType.contains('elemnt__img')) {
            popupView.classList.add('popup_opened');
          }
        }
      }
    }

//Определим функцию для открытия поп-ап просмотра картинки 
function openPopupView(evt) {

  //Вызываем функцию открытия поп-апа
  openPopup(evt);

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

//Определяем функцию закрытия поп-апа
function closePopup (evt) {
    evt.target.closest('.popup').classList.remove('popup_opened');
    if (evt.target.closest('.popup__form') != null) {
      evt.target.closest('.popup__form').reset();
    }
}

//Определяем функцию для редактирования профиля
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
    closePopup (evt);
}

//Определяем функцию для добавления новой карточки
function addFormSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  
  //Вызываем функцию создания нового элемента-карточки
  createElement (titleInput.value, linkInput.value); 
  
  //закрываем поп-ап
  closePopup (evt);
}

//Определим функцию для активации / деактивации кнопки Лайк
function toggleLike (evt) {
  evt.target.classList.toggle('btn_active');
}

//Определим функцию для удаления карточки
function deleteElement (evt) {
    evt.target.closest('.elemnt').remove();
}

//Обработчики
//Создаем набор карточек по умолчанию
initialCards.forEach((item) => {
  //Вызываем функцию создания нового элемента-карточки
  createElement (item.name, item.link);
});

//"Слушаем" клик по кнопке редактирования профиля и открываем поп-ап при нажатии
btnEdit.addEventListener('click', function popupEditOpen (evt) {
    //Вызываем функцию открытия поп-апа
    openPopup (evt);

    //Передаем значения провиля в поля формы
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
});

//"Слушаем" клик по кнопке добавления картинки и открываем поп-ап при нажатии
btnAdd.addEventListener('click', openPopup);

//"Слушаем" клик по кнопке закрытия поапа и закрываем поп-ап при нажатии
popupCloseBtns.forEach((item) => {
  item.addEventListener('click', closePopup);
});

// Прикрепляем обработчики к форме:
editFormElement.addEventListener('submit', editFormSubmitHandler);
addFormElement.addEventListener('submit', addFormSubmitHandler);