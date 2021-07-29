export default function contactItems (){
    const contactitem = (() => {
        let mainContent = document.getElementById('content');
        let contactContent = document.createElement('div');
        let phoneNumber = document.createElement('div');
        let socialInfo = document.createElement('div');
        let emailInfo = document.createElement('div');

        contactContent.id = 'contactContent';
        phoneNumber.id = 'phoneNumber';
        socialInfo.id = 'socialInfo';
        emailInfo.id = 'emailInfo';

        phoneNumber.textContent = '123-456-7891'
        emailInfo.textContent = 'rhalgrtavern@gmail.com'
        socialInfo.textContent = 'Twitter Instagram Facebook'

        mainContent.appendChild(contactContent);
        contactContent.appendChild(phoneNumber);
        contactContent.appendChild(emailInfo);
        contactContent.appendChild(socialInfo);
    })();
};