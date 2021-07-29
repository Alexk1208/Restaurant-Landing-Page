export default function pageContent(){
    const pageTitle = (() => {
        let html = document.querySelector('html');
        let title = document.createElement('title');
        title.textContent = `Rhalgar's Tavern`
        html.appendChild(title);
    })();
    
    const bodyContent = (() => {
        let mainContent = document.getElementById('content');
        let body = document.createElement('div')
        body.id = 'home1';
        let image = document.createElement('img')
        image.id = 'img1';
        let headerOutside = document.createElement('header');
        headerOutside.id = 'headerOutside';
        let header = document.createElement('div');
        header.id = 'header1';
        let beerIcon = document.createElement('img');
        beerIcon.id = 'beerIcon';
        let placeInfo = document.createElement('div');
        placeInfo.id = 'info1';
    
        header.textContent = `Rhalgr's Tavern`;
        image.src = '/src/tavern.jpg';
        beerIcon.src = '/src/free-beer.png';
        placeInfo.textContent = `We have an assortment of drinks and snacks to quench the thirst and
        hunger from your long journey!`;
        
        mainContent.appendChild(body);
        body.appendChild(headerOutside);
        headerOutside.appendChild(beerIcon);
        headerOutside.appendChild(header);
        body.appendChild(image);
        body.appendChild(placeInfo);
    })();
}