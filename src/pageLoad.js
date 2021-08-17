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
        image.src = 'https://t4.ftcdn.net/jpg/04/38/64/05/360_F_438640501_xxj3kod3bFbXkNtLXjXPn0rnmh35NbKB.jpg';
        beerIcon.src = 'https://freeiconshop.com/wp-content/uploads/edd/beer-outline.png';
        placeInfo.textContent = `We have an assortment of drinks and snacks to quench the thirst and
        hunger from your long journey!`;
        
        mainContent.appendChild(body);
        body.appendChild(headerOutside);
        headerOutside.appendChild(beerIcon);
        headerOutside.appendChild(header);
        headerOutside.appendChild(beerIcon);
        body.appendChild(image);
        body.appendChild(placeInfo);
    })();
}