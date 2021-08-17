import pageContent from './pageLoad';
import menuItems from './menuTab';
import contactItems from './contacts';
import './style.css';
const navbar = (() => {
    let body = document.querySelector('body');
    let content = document.createElement('div');
    content.id = 'navBar';
    let navBar = document.createElement('ul');
    let homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    let menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    let contactButton = document.createElement('button');
    contactButton.textContent = 'Contacts'

    navBar.id = 'navbarContent';
    homeButton.classList.add('navContent');
    homeButton.id = 'homeButton';
    menuButton.classList.add('navContent');
    menuButton.id = 'menuButton';
    contactButton.classList.add('navContent');
    contactButton.id = 'contactButton';

    body.appendChild(content);
    content.appendChild(navBar);
    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);


    function clearElement(element){
        document.getElementById(element).innerHTML = '';
    };

    const highlight = (() => {
        let buttons = document.getElementsByClassName('navContent');
        for(let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click', function(){
                let current = document.getElementsByClassName('active');
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                  }
                this.className += " active";
            });
        };
    })();


    homeButton.addEventListener('click', () => {
        clearElement('content');
        pageContent();
    });

    contactButton.addEventListener('click', () => {
        clearElement('content');
        contactItems();
    });

    window.onload = function(){
        homeButton.click();
    }
})();

