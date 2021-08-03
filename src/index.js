import pageContent from './pageLoad';
import menuItems from './menuTab';
import contactItems from './contacts';
import './style.css';
const navbar = (() => {
    let body = document.querySelector('body');
    let content = document.createElement('div');
    content.if = 'navBar';
    let navBar = document.createElement('ul');
    let homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    let menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    let contactButton = document.createElement('button');
    contactButton.textContent = 'Contacts'

    navBar.id = 'navbar';
    homeButton.classList.add('navContent');
    menuButton.classList.add('navContent');
    contactButton.classList.add('navContent');

    body.appendChild(content);
    content.appendChild(navBar);
    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);


    function clearElement(element){
        document.getElementById(element).innerHTML = '';
    };

    homeButton.addEventListener('click', () => {
        clearElement('content');
        pageContent();
    });

    contactButton.addEventListener('click', () => {
        clearElement('content');
        contactItems();
    });
})();

window.onload = pageContent();
