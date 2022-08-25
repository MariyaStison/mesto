(()=>{"use strict";var e=document.querySelector(".popup_type_edit"),t=document.querySelector(".popup_type_add"),n=document.querySelector(".popup_type_edit-avatar"),r=(document.querySelector(".popup_type_confirm"),document.querySelector(".btn_type_edit")),o=document.querySelector(".btn_type_add"),i=document.querySelector(".btn_type_edit-avatar"),c=document.querySelector(".profile__avatar"),u=e.querySelector(".popup__container"),a=u.querySelector(".input_type_name"),s=u.querySelector(".input_type_about"),l=document.querySelector(".profile__title"),f=document.querySelector(".profile__subtitle"),p=document.querySelector(".profile__avatar"),h="btn_active",y=".btn_type_like",d=".elemnt__like-counter",_=".elemnt__img",b={formSelector:".popup__form",inputSelector:".input",submitButtonSelector:".btn_type_submit",inactiveButtonClass:"btn_inactive",inputErrorClass:"input_type_error",errorClass:"input-error_active"};function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n,r,o,i,c,u,a,s,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t,this._image=n,this._alt=r,this._likes=o,this.cardId=i,this.ownerId=c,this._templateSelector=u,this._handleCardClick=a,this._handleCardDelete=s,this._handleLike=l}var t,n;return t=e,(n=[{key:"_getElement",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elemnt").cloneNode(!0)}},{key:"generateElement",value:function(){return this._element=this._getElement(),this._element_img=this._element.querySelector(_),this._element_img.src=this._image,this._element_img.onerror=function(){console.log("При загрузке изображения ".concat(this.src," произошла ошибка"))},this._element.querySelector(".elemnt__title").textContent=this._title,this._element_img.alt=this._alt,this._element.querySelector(".elemnt__like-counter").textContent=this._likes.length,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){this._element.querySelector(".btn_type_delete").addEventListener("click",this._handleCardDelete),this._element.querySelector(y).addEventListener("click",this._handleLike),this._element.querySelector(_).addEventListener("click",this._handleCardClick)}},{key:"_deleteElement",value:function(){this._element.remove(),this._element=null}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._itemsArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._itemsArray.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),k(this,"_handlePopupClose",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("btn_type_close"))&&n.close()})),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._handlePopupClose)}},{key:"renderLoding",value:function(e,t,n){this._popup.querySelector(".btn_type_submit").value=e?t:n}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function I(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function c(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,n))._handleFormSubmit=r,t._inputList=t._popup.querySelectorAll(".input"),t._form=t._popup.querySelector(".popup__form"),t}return t=c,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;C(q(c.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e._form.reset()}))}},{key:"close",value:function(){C(q(c.prototype),"close",this).call(this),this._form.reset()}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(E);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=D(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},U.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function V(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupImg=t._popup.querySelector(".popup__img"),t._popupImgTitle=t._popup.querySelector(".popup__img-title"),t}return t=c,(n=[{key:"open",value:function(e,t){this._popupImg.src=t,this._popupImgTitle.textContent=e,this._popupImg.alt=e,U(A(c.prototype),"open",this).call(this)}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(E);function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=z(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},H.apply(this,arguments)}function z(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=K(e)););return e}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}function G(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(r);if(o){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function c(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,e))._btnConfirm=r._popup.querySelector(t),r._handleDeleteCard=n,r}return t=c,(n=[{key:"open",value:function(e,t){H(K(c.prototype),"open",this).call(this),this._elm=e,this._cardId=t}},{key:"handleDeleteElement",value:function(){this._elm.remove(),this._elm=null}},{key:"setEventListeners",value:function(){var e=this;H(K(c.prototype),"setEventListeners",this).call(this),this._btnConfirm.addEventListener("click",(function(){e._handleDeleteCard(e._cardId),H(K(c.prototype),"close",e).call(e)}))}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(E);function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var X=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=t,this._userInfo=n,this._userAvatar=r,this._userId=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._user={name:this._userName,info:this._userInfo},this._user}},{key:"setUserInfo",value:function(e){l.textContent=e.name,f.textContent=e.about,p.src=e.avatar,this._userName=e.name,this._userInfo=e.about,this._userAvatar=e.avatar}}])&&W(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Z(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),Z(this,"_showInputError",(function(e,t){var n=r._form.querySelector(".".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._submitButton=this._form.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners(this._form,this._inputSelector,this._submitButtonSelector,this._inputErrorClass,this._errorClass,this._inactiveButtonClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"disableBtn",value:function(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._inactiveButtonClass)}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&Y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var te=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"patchUserData",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"postNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}}])&&ee(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-49",headers:{authorization:"fe173521-ce0e-462c-827f-202e1a843a6d","Content-Type":"application/json"}}),ne=new N(".popup_type_view"),re=new Q(".popup_type_confirm",".btn_type_submit",(function(e){te.deleteCard(e).then((function(){re.handleDeleteElement()})).catch((function(e){console.log("Произошла ошибка при удалении карточки: "+e)}))}));re.setEventListeners(),ne.setEventListeners();var oe=new B({popupSelector:".popup_type_edit-avatar",handleFormSubmit:function(e){oe.renderLoding(!0,"Сохранение...","Сохранить"),te.patchAvatar(e).then((function(e){c.src=e.avatar})).catch((function(e){console.log("Произошла ошибка при сохранении данных пользователя: "+e)})).finally((function(){oe.renderLoding(!1,"Сохранение...","Сохранить")})),oe.close(),ae.resetValidation()}});function ie(e,t){var n=new v(e.name,e.link,e.name,e.likes,e.id,e.owner._id,"#elemnt",(function(){ne.open(e.name,e.link,e.name)}),(function(){re.open(r,n.cardId)}),(function(){r.querySelector(y).classList.toggle(h),r.querySelector(y).classList.contains(h)?te.putLike(n.cardId).then((function(e){r.querySelector(d).textContent=e.likes.length})).catch((function(e){console.log("Произошла ошибка при сохранении лайка: "+e)})):te.deleteLike(n.cardId).then((function(e){r.querySelector(d).textContent=e.likes.length})).catch((function(e){console.log("Произошла ошибка при удалении лайка: "+e)}))}));n.cardId=e._id,n.ownerId=e.owner._id;var r=n.generateElement();return n.ownerId!=t&&r.querySelector(".btn_type_delete").classList.add("btn_hidden"),r}oe.setEventListeners(),te.getUserData().then((function(e){var t=new X(e.name,e.about,e.avatar,e._id);return t.setUserInfo(e),t._userId=e._id,t})).then((function(e){var t=new B({popupSelector:".popup_type_edit",handleFormSubmit:function(n){t.renderLoding(!0,"Сохранение...","Сохранить"),te.patchUserData(n).then((function(t){e.setUserInfo(t)})).catch((function(e){console.log("Произошла ошибка при сохранении данных пользователя: "+e)})).finally((function(){t.renderLoding(!1,"Сохранение...","Сохранить")})),t.close(),ue.resetValidation()}});return t.setEventListeners(),r.addEventListener("click",(function(){t.open(),a.value=e.getUserInfo().name,s.value=e.getUserInfo().info})),e})).catch((function(e){console.log("Произошла ошибка при загрузке данных пользователя: "+e)})).then((function(e){te.getInitialCards().then((function(t){var n=new w({items:t,renderer:function(t){n.addItem(ie(t,e._userId))}},".elemets");return n.renderItems(),n})).then((function(t){var n=new B({popupSelector:".popup_type_add",handleFormSubmit:function(r){n.renderLoding(!0,"Создание...","Создать"),te.postNewCard(r).then((function(n){t.addItem(ie(n,e._userId))})).catch((function(e){console.log("Произошла ошибка при сохранении карточки: "+e)})).finally((function(){n.renderLoding(!0,"Создание...","Создать")})),n.close()}});n.setEventListeners(),o.addEventListener("click",(function(){n.open(),ce.disableBtn(),ce.resetValidation()}))})).catch((function(e){console.log("Произошла ошибка при загрузки карточек: "+e)}))}));var ce=new $(b,t);ce.enableValidation();var ue=new $(b,e);ue.enableValidation();var ae=new $(b,n);ae.enableValidation(),i.addEventListener("click",(function(){oe.open()}))})();