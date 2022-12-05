const swiper = new Swiper('.image-slider', {
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
        414: {
            centeredSlides: true,
            slidesPerView: 1.5,
        },
        1024: {
            centeredSlides: false,
            slidesPerView: 1,
        }
    }
});

