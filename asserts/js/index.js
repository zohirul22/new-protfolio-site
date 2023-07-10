$('.owl-carousel').owlCarousel({

    margin: 30,
    nav: true,

    dots: false,
    loop: true,
    navText: ["<i class='fa fa-arrow-left' ></i>",
        "<i class='fa fa-arrow-right' ></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// header js
let navMenu = document.querySelector('#menu-icon');
let toggleMenu = document.querySelector('.navbar');

navMenu.onclick = () => {
    navMenu.classList.toggle('bx-x');
    toggleMenu.classList.toggle('open');

}