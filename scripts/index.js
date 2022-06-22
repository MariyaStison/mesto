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
const editBtn = document.querySelector('.btn_type_edit');
const addBtn = document.querySelector('.btn_type_add');
const popupCloseBtns = document.querySelectorAll('.btn_type_close');
const likeBtns = document.querySelectorAll('.btn_type_like');
const deleteBtns = document.querySelectorAll('.btn_type_delete');

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
    const popupTarget = evt.target.classList[1];

    if (popupTarget === 'btn_type_edit') {
      popupEdit.classList.add('popup_opened');
    } else {
        if (popupTarget === 'btn_type_add') {
            popupAdd.classList.add('popup_opened');
    }}   
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
for (i = 0; i < popupCloseBtns.length; i = i + 1) {
  popupCloseBtns[i].addEventListener('click', popupClose);
}

//"Слушаем" клик по кнопке like
for (i = 0; i < likeBtns.length; i = i + 1) {
    likeBtns[i].addEventListener('click', toggleLike);
}

//"Слушаем" клик по кнопке Удалить
for (i = 0; i < deleteBtns.length; i = i + 1) {
    deleteBtns[i].addEventListener('click', deleteElement);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editFormElement.addEventListener('submit', editFormSubmitHandler);

addFormElement.addEventListener('submit', addFormSubmitHandler);