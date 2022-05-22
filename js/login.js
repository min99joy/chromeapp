const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const logoutBtn = greeting.querySelector('button');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username'

const savedUsername = localStorage.getItem(USERNAME_KEY);

const hidden = {
    addClass : function (element) {
        element.classList.add(HIDDEN_CLASSNAME);
    },
    removeClass : function (element) {
        element.classList.remove(HIDDEN_CLASSNAME);
    }
};

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();
    hidden.addClass(loginForm);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
};

function paintGreetings(username) {
    greeting.prepend(`Hello ${username}`);
    hidden.removeClass(greeting);
    logoutBtn.addEventListener('click', onLogOut);
};

function onLogOut() {
    hidden.removeClass(loginForm);
    loginInput.value = ''
    localStorage.removeItem(USERNAME_KEY);
    greeting.removeChild(greeting.firstChild);
    hidden.addClass(greeting);
};

if (savedUsername === null) {
    hidden.removeClass(loginForm);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
};