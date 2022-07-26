import {openPopup, popupView} from './index.js';

export class Card {
  constructor(title, image, alt, templateSelector) {
    this._title = title;
    this._image = image;
    this._alt = alt;
    this._templateSelector = templateSelector
  
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
    this._element.querySelector('.elemnt__title').textContent = this._title;
    this._element_img.alt = this._alt;
    
    //Добавляем слушателей
    this._setEventListeners();

   return this._element;
  }

    //Приватный метод для добавления слушателя
    _setEventListeners() {
        //Слушатель для кнопки Удалить
        this._element.querySelector('.btn_type_delete').addEventListener('click', () => {
          this._deleteElement();
        });
        
        //Слушатель для кнопки Лайк
        this._element.querySelector('.btn_type_like').addEventListener('click', () => {
          this._toggleLike();
        });       
        
        //Слушатель для клика на карточке
        this._element.querySelector('.elemnt__img').addEventListener('click', () => {
            this._openPopupView();
        });
      }
    
      //Приватный метод для активации / деактивации кнопки Лайк
      _toggleLike() {
        this._element.querySelector('.btn_type_like').classList.toggle('btn_active');
      };
      
      //Приватный метод для удаления карточки
      _deleteElement() {
        this._element.remove();
        this._element = null;
      };
    
      //Приватный метод для открытия поп-ап просмотра картинки 
      _openPopupView() {
     
       //Находим в целевой карточки ссылку на картинку и заголовок
       const targetLink = this._element.querySelector('.elemnt__img');
       const targetTitle = this._element.querySelector('.elemnt__title');
       
       //Находим элементы поп-апа просмотра картинки
       const popupImg = popupView.querySelector('.popup__img');
       const popupImgTitle = popupView.querySelector('.popup__img-title');
       
       //Передаем картинку и заголовок
       popupImg.src = targetLink.src;
       popupImgTitle.textContent = targetTitle.textContent;
       popupImg.alt = targetTitle.textContent;
     
       //Вызываем функцию открытия поп-апа
       openPopup(popupView);
       };

}
