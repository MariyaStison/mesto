export default class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    //Метод для получения информации о пользователе
    getUserData() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
        })
            .then(res => {
              if (res.ok) {
                return res.json();
              } 
            // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
               })
            .then(result => {
                return result;
            })
            .catch((err) => {
              console.log(err); // выведем ошибку в консоль
            });
    }
     
    //Метод для получения данных карточек
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
            })
                .then(res => {
                  if (res.ok) {
                    return res.json();
                  } 
                // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                   })
                .then(result => {
                    return result;
                })
                .catch((err) => {
                  console.log(err); // выведем ошибку в консоль
                });
    }
  
    //Метод для загрузки данных пользователя на сервер
    patchUserData(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',    
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
            })
                .then(res => {
                  if (res.ok) {
                    return res.json();
                  } 
                // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                   })
                .then(result => {
                    return result;
                })
                .catch((err) => {
                  console.log(err); // выведем ошибку в консоль
                });
    }

    //Метод для добавления новой карточки
    postNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',    
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
            })
                .then(res => {
                  if (res.ok) {
                    return res.json();
                  } 
                // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                   })
                .then(result => {
                    return result;  
                })
                .catch((err) => {
                  console.log(err); // выведем ошибку в консоль
                });
    }

     //Метод для удаления карточки
    deleteCard(card_id) {
        return fetch(`${this._baseUrl}/cards/${card_id}`, {
            method: 'DELETE',    
            headers: this._headers,
            })
                .then(res => {
                  if (res.ok) {
                    return res.json();
                  } 
                // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                   })
                .then(result => {
                    return result;  
                })
                .catch((err) => {
                  console.log(err); // выведем ошибку в консоль
                });
    }

    //Метод для редактирования аватара
    patchAvatar(data)  {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',    
            headers: this._headers,
              body: JSON.stringify({
                avatar: data.link
              })
            })
        
                .then(res => {
                  if (res.ok) {
                    return res.json();
                  } 
                // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                   })
                .then(result => {
                    return result;
                })
                .catch((err) => {
                  console.log(err); // выведем ошибку в консоль
                });
    }

    //Метод для постановки лайка
    putLike(card_id) {
        return fetch(`${this._baseUrl}/cards/${card_id}/likes`, {
            method: 'PUT',    
            headers: this._headers,
            })
                .then(res => {
                  if (res.ok) {
                    return res.json();
                  } 
                // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                   })
                .then(result => {
                    return result;  
                })
                .catch((err) => {
                  console.log(err); // выведем ошибку в консоль
                });
    }

    //Метод для удаления лайка
    deleteLike(card_id) {
        return fetch(`${this._baseUrl}/cards/${card_id}/likes`, {
            method: 'DELETE',    
            headers: this._headers,
            })
                .then(res => {
                  if (res.ok) {
                    return res.json();
                  } 
                // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                   })
                .then(result => {
                    return result;  
                })
                .catch((err) => {
                  console.log(err); // выведем ошибку в консоль
                });
    }
}