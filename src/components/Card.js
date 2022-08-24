import {elementImgSelector, elementTitleSelector, 
  btnTypeLikeSelector, btnTypeDeleteSelector} from '../utils/constants.js';

export class Card {
  constructor(title, image, alt, likes, cardId, ownerId, templateSelector, handleCardClick, handleCardDelete, handleLike) {
    this._title = title;
    this._image = image;
    this._alt = alt;
    this._likes = likes;
    this.cardId = cardId;
    this.ownerId = ownerId;
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
    this._element_img = this._element.querySelector(elementImgSelector);
    
    //Заполняем необходимые значения
    this._element_img.src = this._image;
    this._element.querySelector(elementTitleSelector).textContent = this._title;
    this._element_img.alt = this._alt;
    this._element.querySelector('.elemnt__like-counter').textContent = this._likes.length;

    //Добавляем слушателей
    this._setEventListeners();

    return this._element;
  }

    //Приватный метод для добавления слушателя
    _setEventListeners() {
        //Слушатель для кнопки Удалить
        this._element.querySelector(btnTypeDeleteSelector).addEventListener('click', this._handleCardDelete);
        
        //Слушатель для кнопки Лайк
        this._element.querySelector(btnTypeLikeSelector).addEventListener('click', this._handleLike);       
        
        //Слушатель для клика на карточке
        this._element.querySelector(elementImgSelector).addEventListener('click', this._handleCardClick);
      }
  
      //Приватный метод для удаления карточки
      _deleteElement() {
        this._element.remove();
        this._element = null;
      }
}