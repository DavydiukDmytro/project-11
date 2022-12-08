const swiperHero = new Swiper('.swiper-hero', {
    navigation: {
        nextEl: '.swiper-hero-button-next',
        prevEl: '.swiper-hero-button-prev',
    },
});
const swiperLux = new Swiper('.swiper-hotel-lux', {
    navigation: {
        nextEl: '.swiper-hotel-lux-button-next',
        prevEl: '.swiper-hotel-lux-button-prev',
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});
const swiperTriple = new Swiper('.swiper-hotel-triple', {
    navigation: {
        nextEl: '.swiper-hotel-triple-button-next',
        prevEl: '.swiper-hotel-triple-button-prev',
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});
const swiperDouble = new Swiper('.swiper-hotel-double', {
    navigation: {
        nextEl: '.swiper-hotel-double-button-next',
        prevEl: '.swiper-hotel-double-button-prev',
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});
const swiperRestaurant = new Swiper('.swiper-restaurant', {
    navigation: {
        nextEl: '.swiper-restaurant-button-next',
        prevEl: '.swiper-restaurant-button-prev',
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});
const swiperAboutRest = new Swiper('.swiper-about-rest', {
    navigation: {
        nextEl: '.swiper-about-rest-button-next',
        prevEl: '.swiper-about-rest-button-prev',
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 25,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});
const swiperAboutHotel = new Swiper('.swiper-about-hotel', {
    navigation: {
        nextEl: '.swiper-about-hotel-button-next',
        prevEl: '.swiper-about-hotel-button-prev',
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});
const swiperRestDetails = new Swiper('.swiper-rest-details', {
    navigation: {
        nextEl: '.swiper-rest-details-button-next',
        prevEl: '.swiper-rest-details-button-prev',
    },
    loop: true,
    slidesPerView: 'auto',
    loopedSlidesLimit: false,
    loopedSlides: 6,
    loopPreventsSlide: true,
    spaceBetween: 20,
    breakpoints: {
        1024: {
            spaceBetween: 34,
        },
        1280: {
            spaceBetween: 87,
        },
    },
});
const swiperHotelDetails = new Swiper('.swiper-hotel-details', {
     navigation: {
        nextEl: '.swiper-hotel-details-button-next',
        prevEl: '.swiper-hotel-details-button-prev',
    },
    loop: true,
    slidesPerView: 'auto',
    loopedSlidesLimit: false,
    loopedSlides: 6,
    loopPreventsSlide: true,
    spaceBetween: 20,
    breakpoints: {
        1024: {
            spaceBetween: 34,
        },
        1280: {
            spaceBetween: 87,
        },
    },
});