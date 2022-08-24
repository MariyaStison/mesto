export default class Api {
    constructor({baseUrl, headers}) {
      this.baseUrl = baseUrl;
      this.headers = headers;
    }
  
    //Метод для получения информации о пользователе
    getUserData() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-49/users/me', {
        headers: {
            authorization: 'fe173521-ce0e-462c-827f-202e1a843a6d',
            'Content-Type': 'application/json'
          }
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
        return fetch('https://mesto.nomoreparties.co/v1/cohort-49/cards', {
            headers: {
                authorization: 'fe173521-ce0e-462c-827f-202e1a843a6d',
                'Content-Type': 'application/json'
              }
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
        return fetch('https://mesto.nomoreparties.co/v1/cohort-49/users/me', {
            method: 'PATCH',    
            headers: {
                authorization: 'fe173521-ce0e-462c-827f-202e1a843a6d',
                'Content-Type': 'application/json'
              },
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
        return fetch('https://mesto.nomoreparties.co/v1/cohort-49/cards', {
            method: 'POST',    
            headers: {
                authorization: 'fe173521-ce0e-462c-827f-202e1a843a6d',
                'Content-Type': 'application/json'
              },
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
        return fetch('https://mesto.nomoreparties.co/v1/cohort-49/cards/' + card_id, {
            method: 'DELETE',    
            headers: {
                authorization: 'fe173521-ce0e-462c-827f-202e1a843a6d',
                'Content-Type': 'application/json'
              },
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
        return fetch('https://mesto.nomoreparties.co/v1/cohort-49/users/me/avatar', {
            method: 'PATCH',    
            headers: {
                authorization: 'fe173521-ce0e-462c-827f-202e1a843a6d',
                'Content-Type': 'application/json'
              },
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
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-49/cards/${card_id}/likes`, {
            method: 'PUT',    
            headers: {
                authorization: 'fe173521-ce0e-462c-827f-202e1a843a6d',
                'Content-Type': 'application/json'
              },
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
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-49/cards/${card_id}/likes`, {
            method: 'DELETE',    
            headers: {
                authorization: 'fe173521-ce0e-462c-827f-202e1a843a6d',
                'Content-Type': 'application/json'
              },
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