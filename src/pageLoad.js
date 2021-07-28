export default function pageContent(){
    const pageTitle = (() => {
        let html = document.querySelector('html');
        let title = document.createElement('title');
        title.textContent = `Rhalgar's Tavern`
        html.appendChild(title);
    })();
    
    const bodyContent = (() => {
        let body = document.getElementById('content')
        let image = document.createElement('img')
        let header = document.createElement('header');
        let placeInfo = document.createElement('div');
    
        header.textContent = `Welcome to Rhalgar's Tavern`;
        image.src = '/src/tavern.jpg';
        placeInfo.textContent = `We have an assortment of drinks and snacks to quench the thirst and
        hunger from your long journey!`;
    
        body.appendChild(header);
        body.appendChild(image);
        body.appendChild(placeInfo);
    })();
}