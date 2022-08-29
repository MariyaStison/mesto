export class Card {
  constructor(title, image, alt, likes, cardId, ownerId, userId, templateSelector, handleCardClick, handleCardDelete, handleLike) {
    this._title = title;
    this._image = image;
    this._alt = alt;
    this._likes = likes;
    this.cardId = cardId;
    this._ownerId = ownerId;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleLike = handleLike;
  }
  
  //Приватный метод для создания нового элементы по шаблону
  _getElement() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elemnt').cloneNode(true);
    
    return cardElement;
  }
  
  //Публичный метод для добавления нового элемента в разметку
  generateElement() {
    //Создаем новый эелемент
    this._element = this._getElement();

    //Записываем DOM-элемент elemnt__img в переменную
    this._element_img = this._element.querySelector('.elemnt__img');
    
    //Заполняем необходимые значения
    this._element_img.src = this._image;
    //Обработка ошибки при загрузке картинки
    this._element_img.onerror = function() {
      console.log(`При загрузке изображения ${this.src} произошла ошибка`);
    }
    this._element.querySelector('.elemnt__title').textContent = this._title;
    this._element_img.alt = this._alt;
    this._element.querySelector('.elemnt__like-counter').textContent = this._likes.length;

    if (this._likes.some((like) => like._id === this._userId)) {
      this._element.querySelector('.btn_type_like').classList.add('btn_active');
    }

    //Скрываем иконку Удалить для чужих карточек
    if (this._ownerId != this._userId) {
      this._element.querySelector('.btn_type_delete').classList.add('btn_hidden');
    }
 
    //Добавляем слушателей
    this._setEventListeners();

    return this._element;
  }

  toggleLike(likes) {
    this._element.querySelector('.btn_type_like').classList.toggle('btn_active');
    this._element.querySelector('.elemnt__like-counter').textContent = likes.length;
  }

  isLiked() {
    return this._element.querySelector('.btn_type_like').classList.contains('btn_active')
  } 

  //Приватный метод для добавления слушателя
  _setEventListeners() {
        //Слушатель для кнопки Удалить
        this._element.querySelector('.btn_type_delete').addEventListener('click', this._handleCardDelete);
        
        //Слушатель для кнопки Лайк
        this._element.querySelector('.btn_type_like').addEventListener('click', this._handleLike);       
        
        //Слушатель для клика на карточке
        this._element.querySelector('.elemnt__img').addEventListener('click', this._handleCardClick);
      }
   
  //Метод для удаления карточки
  deleteElement() {
    this._element.remove();
    this._element = null;
  }
}