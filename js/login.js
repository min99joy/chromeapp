const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const userPage = document.querySelector('body main');
const logoutBtn = document.querySelector('#logoutBtn');

const SHOW_CLASSNAME = 'show';
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username'

const savedUsername = localStorage.getItem(USERNAME_KEY);

const hidden = {
    addClass : function (element) {
        element.classList.add(HIDDEN_CLASSNAME);
        element.classList.remove(SHOW_CLASSNAME);
    },
    removeClass : function (element) {
        element.classList.remove(HIDDEN_CLASSNAME);
        element.classList.add(SHOW_CLASSNAME);
    }
};

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    hidden.addClass(loginForm);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
};

function paintGreetings(username) {
    greeting.prepend(`Hello ${username}`);
    hidden.removeClass(userPage);
    logoutBtn.addEventListener('click', onLogOut);
};

function onLogOut() {
    hidden.removeClass(loginForm);
    loginInput.value = ''
    localStorage.removeItem(USERNAME_KEY);
    greeting.removeChild(greeting.firstChild);
    hidden.addClass(userPage);
};

if (savedUsername === null) {
    hidden.removeClass(loginForm);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
};