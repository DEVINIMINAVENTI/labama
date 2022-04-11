const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener('click', navToggle);

function navToggle(){

    const nav = document.querySelector(".navbar ul");
    nav.classList.toggle("open");
   
}