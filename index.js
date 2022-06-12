//Находим поп-ап, кнопку Редактирования профиля, кнопку закрытия поп-апа
let popup = document.querySelector('.popup');
let addBtn = document.querySelector('.btn_type_edit');
let closeBtn = document.querySelector('.btn_type_close');

//Определяем функцию открытия поп-апа
function popupOpen () {
    popup.classList.add('popup_opened')
}

//Определяем функцию закрытия поп-апа
function popupClose () {
    popup.classList.remove('popup_opened')
}

//"Сулшаем" клик по кнопке редактирования профиля и открываем поп-ап при нажатии
addBtn.addEventListener('click', popupOpen);

//"Сулшаем" клик по кнопке закрытия поапа и закрываем поп-ап при нажатии
closeBtn.addEventListener('click', popupClose);

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');

// Находим поля формы в DOM
let nameInput = formElement.querySelector('.input_type_name');
let jobInput = formElement.querySelector('.input_type_about');

//Находим поля блока Profile, куда нужно будет встаить новые значения
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameNew = nameInput.value;
    let aboutNew = jobInput.value;

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameNew;
    profileAbout.textContent = aboutNew;
    
    //закрываем поп-ап
    popupClose ();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);