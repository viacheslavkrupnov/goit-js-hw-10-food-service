import './styles.css';
import menuElement from './menu.json'
import menuTemplate from './templates/menu-items.hbs';
import './changeTheme.js'


let menu = document.querySelector('.js-menu');

function buildMenu(array) {
    const markup = array.map(post => menuTemplate(post)).join('');
    menu.insertAdjacentHTML('beforeend', markup);
}

buildMenu(menuElement);