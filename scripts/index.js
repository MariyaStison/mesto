//Переменные
  //Находим поп-апы, кнопку Редактирования профиля, кнопку Добавления места, кнопки закрытия поп-апов
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupView = document.querySelector('.popup_type_view');
const btnEdit = document.querySelector('.btn_type_edit');
const btnAdd = document.querySelector('.btn_type_add');
const popupCloseBtns = document.querySelectorAll('.btn_type_close');

// Находим формы в DOM
const formElementEdit = popupEdit.querySelector('.popup__container');
const formElementAdd = popupAdd.querySelector('.popup__container');

// Находим поля форм в DOM
const nameInput = formElementEdit.querySelector('.input_type_name');
const jobInput = formElementEdit.querySelector('.input_type_about');
const newElementInput = {
  name: formElementAdd.querySelector('.input_type_name'),
  link: formElementAdd.querySelector('.input_type_about')
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
function createElement({link, name}) {
  //Клонируем содержимое тега template
  const newElement = elementTemplate.querySelector('.elemnt').cloneNode(true);
  
  //Находим элементы DOM
  const elementImg = newElement.querySelector('.elemnt__img');
  const elementTitle = newElement.querySelector('.elemnt__title');
  const elementLikeBtn = newElement.querySelector('.btn_type_like');
  const elementDeleteBtn = newElement.querySelector('.btn_type_delete'); 

  //Заполняем содержимым
  elementImg.src = link;
  elementTitle.textContent = name;
  elementImg.alt = name;
  
  //Добавляем "слушателей"
  elementImg.addEventListener('click', openPopupView);
  elementLikeBtn.addEventListener('click', toggleLike);
  elementDeleteBtn.addEventListener('click', deleteElement);

  //Возвращаем созданный элемент
  return newElement;
};

//Определяем функцию добавления карточки на страницу
function renderElement(newElement) {
  elementsContainer.prepend(newElement);
};

//Определяем функцию, закрывающую поп-ап по нажатию на Esc
function closePopupByEsc(evt, popup) {
  if (evt.key === 'Escape') {
    closePopup(popup);
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
  function openPopup(popup) {
    popup.classList.add('popup_opened');
    //Добавляем "слушатель" для нажатия на кнопку Esc
    document.addEventListener('keydown', closePopupByEsc);
    //Добавляем "слушатель" для клика вне поп-апа
    document.addEventListener('click', closePopupByClickOut);
  };

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
    name: formElementAdd.querySelector('.input_type_name').value,
    link: formElementAdd.querySelector('.input_type_about').value
  };

  //Вызываем функцию создания нового элемента-карточки и добавления элемента на страницу
  renderElement(createElement(newElementInput)); 
  
  //закрываем поп-ап
  closePopup(popupAdd);
  
  //Сбрасываем введенные параметры
  formElementAdd.querySelector('.popup__form').reset();
};

//Определим функцию для активации / деактивации кнопки Лайк
function toggleLike(evt) {
  evt.target.classList.toggle('btn_active');
};

//Определим функцию для удаления карточки
function deleteElement(evt) {
    evt.target.closest('.elemnt').remove();
};

//Обработчики
//Создаем набор карточек по умолчанию
initialCards.forEach((item) => {
  renderElement(createElement(item));
});

//"Слушаем" клик по кнопке редактирования профиля и открываем поп-ап при нажатии
btnEdit.addEventListener('click', function popupEditOpen(evt) {
    //Вызываем функцию открытия поп-апа
    openPopup(popupEdit);

    //Передаем значения провиля в поля формы
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;

   
});

//"Слушаем" клик по кнопке добавления картинки и открываем поп-ап при нажатии
btnAdd.addEventListener('click', function(evt) {
  openPopup(popupAdd);
  disableBtn(popupAdd.querySelector('.btn_type_submit'), 'btn_inactive');
});

//"Слушаем" клик по кнопке закрытия поапа и закрываем поп-ап при нажатии
popupCloseBtns.forEach((item) => {
  item.addEventListener('click', function (evt) {
  closePopup (evt.target.closest('.popup'));
});
});

// Прикрепляем обработчики к форме:
formElementEdit.addEventListener('submit', editFormSubmitHandler);
formElementAdd.addEventListener('submit', addFormSubmitHandler);