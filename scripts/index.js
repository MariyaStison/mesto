//Переменные
  //Находим поп-апы, кнопку Редактирования профиля, кнопку Добавления места, кнопки закрытия поп-апов
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupView = document.querySelector('.popup_type_view');
const btnEdit = document.querySelector('.btn_type_edit');
const btnAdd = document.querySelector('.btn_type_add');
const popupCloseBtns = document.querySelectorAll('.btn_type_close');

// Находим формы в DOM
const editFormElement = popupEdit.querySelector('.popup__container');
const addFormElement = popupAdd.querySelector('.popup__container');

// Находим поля форм в DOM
const nameInput = editFormElement.querySelector('.input_type_name');
const jobInput = editFormElement.querySelector('.input_type_about');
const newElementInput = {
  name: addFormElement.querySelector('.input_type_name'),
  link: addFormElement.querySelector('.input_type_about')
};

//Находим поля блока Profile, куда нужно будет встаить новые значения
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');

//Выбираем содержимое template
const elementTemplate = document.querySelector('#elemnt').content;

//Находим контейнер с карточками
const elementsContainer = document.querySelector('.elemets');

//Функции
//Определяем функцию для создания нового элемента-карточки
function createElement (newCard) {
  //Клонируем содержимое тега template
  const newElement = elementTemplate.querySelector('.elemnt').cloneNode(true);
  
  //Находим элементы DOM
  const elementImg = newElement.querySelector('.elemnt__img');
  const elementTitle = newElement.querySelector('.elemnt__title');

  //Заполняем содержимым
  elementImg.src = newCard.link;
  elementTitle.textContent = newCard.name;
  elementImg.alt = newCard.name;
  
  //Возвращаем созданный элемент
  return (newElement);
};

//Определяем функцию добавления карточки на страницу
function renderElement (newElement) {
  const elementImg = newElement.querySelector('.elemnt__img');
  const elementLikeBtn = newElement.querySelector('.btn_type_like');
  const elementDeleteBtn = newElement.querySelector('.btn_type_delete'); 
  
  //Добавляем элемент на страницу
  elementsContainer.prepend(newElement);

  //Добавляем "слушателей"
  elementImg.addEventListener('click', openPopupView);
  elementLikeBtn.addEventListener('click', toggleLike);
  elementDeleteBtn.addEventListener('click', deleteElement);
};

//Определяем функцию, открывающую нужный поп-ап
  function openPopup (popup) {
    popup.classList.add('popup_opened');
  }  

//Определим функцию для открытия поп-ап просмотра картинки 
function openPopupView(evt) {

  //Вызываем функцию открытия поп-апа
  openPopup(popupView);

  //Определяем целевую карточку
  const targetElement = evt.target.closest('.elemnt');

  //Находим в целевой карточки ссылку на картинку и заголовок
  const targetLink = targetElement.querySelector('.elemnt__img');
  const targetTitle = targetElement.querySelector('.elemnt__title');

  //Находим нужные DOM эдементы в поп-апе
  const popupImg = popupView.querySelector('.popup__img');
  const popupImgTitle = popupView.querySelector('.popup__img-title');

  //Передаем картинку и заголовок
  popupImg.src = targetLink.src;
  popupImgTitle.textContent = targetTitle.textContent;
  popupImg.alt = targetTitle.textContent;
  };

//Определяем функцию закрытия поп-апа
function closePopup (popup) {
    popup.classList.remove('popup_opened');
};

//Определяем функцию для редактирования профиля
function editFormSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    
    //закрываем поп-ап
    closePopup (evt.target.closest('.popup'));
};

//Определяем функцию для добавления новой карточки
function addFormSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  
  const newElementInput = {
    name: addFormElement.querySelector('.input_type_name').value,
    link: addFormElement.querySelector('.input_type_about').value
  };

  //Вызываем функцию создания нового элемента-карточки и добавления элемента на страницу
  renderElement (createElement (newElementInput)); 
  
  //закрываем поп-ап
  closePopup (evt.target.closest('.popup'));
  
  //Сбрасываем ввденные параметры
  evt.target.closest('.popup__form').reset();
};

//Определим функцию для активации / деактивации кнопки Лайк
function toggleLike (evt) {
  evt.target.classList.toggle('btn_active');
};

//Определим функцию для удаления карточки
function deleteElement (evt) {
    evt.target.closest('.elemnt').remove();
};

//Обработчики
//Создаем набор карточек по умолчанию
initialCards.forEach((item) => {
  renderElement (createElement (item));
});

//"Слушаем" клик по кнопке редактирования профиля и открываем поп-ап при нажатии
btnEdit.addEventListener('click', function popupEditOpen (evt) {
    //Вызываем функцию открытия поп-апа
    openPopup (popupEdit);

    //Передаем значения провиля в поля формы
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
});

//"Слушаем" клик по кнопке добавления картинки и открываем поп-ап при нажатии
btnAdd.addEventListener('click', function (evt) {
  openPopup (popupAdd);
});

//"Слушаем" клик по кнопке закрытия поапа и закрываем поп-ап при нажатии
popupCloseBtns.forEach((item) => {
  item.addEventListener('click', function (evt) {
  closePopup (evt.target.closest('.popup'));
});
});

// Прикрепляем обработчики к форме:
editFormElement.addEventListener('submit', editFormSubmitHandler);
addFormElement.addEventListener('submit', addFormSubmitHandler);