import pageContent from './pageLoad';
import menuItems from './menuTab';
import contactItems from './contacts';
import './style.css';

const navbar = (() => {
    let content = document.getElementById('content')
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

    content.appendChild(navBar);
    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
    const defaultDisplay = (() => {
        
    })();

    const menuDisplay = (() => {

    })();

    const contactDisplay = (() => {

    })();
})();


pageContent();
