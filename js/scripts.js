document.addEventListener("DOMContentLoaded", () => {
    // // Mobile True Viewport Height
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    if (document.querySelector('#togglemenu')) {
        document.querySelector('#togglemenu').checked = false;

        // Open Navbar
        document.querySelector('#togglemenu').addEventListener('click', () => {
            document.querySelector('.menu-overlay').classList.toggle('open');
            document.querySelector('.wrapper').classList.toggle('closed');
        });
    
        document.querySelector('.nav-item').addEventListener('click', () => {
            document.querySelector('#togglemenu').checked = false;
        });
    }

    var swiper = new Swiper('.swiper-container', {
        effect: 'fade',
        speed: 800,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 6500,
        },
    });

});