//When click on the toggle menu
document.addEventListener('click', ()=>{
    // document.querySelector('header .container .menu').classList.toggle('display-none');    
    // document.querySelector('.logo-navbar .fa-xmark').classList.toggle('display-none');    
    // toggleMenu.classList.toggle('display-none');    
});

// // let menuFont = document.querySelector('header .container .menu').classList;
// document.querySelector('header .container .menu').addEventListener('click', ()=>{
//     document.querySelector('header .container .menu').classList.toggle('display-none');
// })
    
// The menu font
let toggleMenu = document.querySelector('.toggle-menu');

//The xmark font
let xmarkFont = document.querySelector('.fa-xmark');
    
// Mobile design 

toggleMenu.onclick = function(){
    document.querySelector('header .container .menu').classList.toggle('display-none');
    toggleMenu.classList.toggle('display-none');
    xmarkFont.classList.toggle('display-none');
}

xmarkFont.onclick = function(){
    document.querySelector('header .container .menu').classList.toggle('display-none');
    toggleMenu.classList.toggle('display-none');
    xmarkFont.classList.toggle('display-none');
}

