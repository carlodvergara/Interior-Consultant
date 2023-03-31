const bgWall = document.querySelector('.bg-wall');
bgWall.classList.add('close-window')


const menuVe = document.createElement('div');
menuVe.classList.add('menu-ve');

const headerMv = document.createElement('div');
headerMv.classList.add('header-mv');


const iconClose = document.createElement('i');
iconClose.classList.add('fa-solid' , 'fa-xmark' , 'fa-2xl');


const ulVe = document.createElement('ul');
ulVe.classList.add('ul-ve');

const liHome = document.createElement('li');
liHome.innerText = 'Home';

const liCollection = document.createElement('li');
liCollection.innerText = 'Collection';

const liAbout = document.createElement('li');
liAbout.innerText = 'About';

const liContact = document.createElement('li');
liContact.innerText = 'Contact';

bgWall.appendChild(menuVe);
menuVe.appendChild(headerMv);
headerMv.appendChild(iconClose);
menuVe.appendChild(ulVe);
ulVe.appendChild(liHome);
ulVe.appendChild(liCollection);
ulVe.appendChild(liAbout);
ulVe.appendChild(liContact);


const btnMenu = document.querySelector('.fa-bars')

const body = document.querySelector('body');

btnMenu.addEventListener('click', () => {
    if(bgWall.classList.contains('close-window')){
    bgWall.classList.remove('close-window');
    bgWall.classList.add('open-window');
    document.body.style.overflow = 'hidden';


    } 
});


iconClose.addEventListener('click', () => {
    if(bgWall.classList.contains('open-window')){
    bgWall.classList.remove('open-window');
    bgWall.classList.add('close-window');
    document.body.style.overflow = '';
    } 
});




// Cierra bgWall si el ancho de la ventana gráfica es menor que 959px
function closeBgWallIfSmallViewport() {
  if (window.innerWidth > 959) {
    bgWall.classList.remove('open-window');
    bgWall.classList.add('close-window');
    document.body.style.overflow = '';

  }
}

// Agrega el listener para el evento resize
window.addEventListener('resize', closeBgWallIfSmallViewport);

// Llama la función al cargar la página para comprobar el estado inicial
closeBgWallIfSmallViewport();
