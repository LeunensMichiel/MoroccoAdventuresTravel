document.addEventListener("DOMContentLoaded", () => {
    // // Mobile True Viewport Height
    const vh = window.innerHeight * 0.01;
    document.body.style.setProperty('--vh', `${vh}px`);

    if (document.querySelector('#togglemenu')) {
        document.querySelector('#togglemenu').checked = false;

        // Open Navbar
        document.querySelector('#togglemenu').addEventListener('click', () => {
            document.querySelector('.menu-overlay').classList.toggle('open');
            document.querySelector('.wrapper').classList.toggle('closed');
        });
    }

    window.addEventListener('scroll', function (e) {
        if (window.scrollY > 100) {
            document.querySelector('.menu-overlay').classList.add('solid');
        } else {
            document.querySelector('.menu-overlay').classList.remove('solid');
        }
    });

    if (document.querySelector('.swiper-container')) {
        const swiper = new Swiper('.swiper-container', {
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
    }
    if (document.querySelector('.rellax')) {
        const rellax = new Rellax('.rellax', {
            speed: -1,
            center: true,
            wrapper: '.parallax',
            relativeToWrapper: true,
            round: true,
            vertical: true,
            horizontal: false
        });
    }
});