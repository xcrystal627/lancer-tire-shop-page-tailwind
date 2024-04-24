window.addEventListener('scroll', function() {
    var scrollPositionElement = document.documentElement.scrollTop;
    var headerElement = document.getElementById('header');
    var logoElement = document.getElementById('logo-image');
    var menuButtonElement = document.getElementById('menu-bar-open-button');



    if (scrollPositionElement > 60) {
        logoElement.classList.remove('py-[20px]');
        logoElement.classList.add('py-[5px]');
        menuButtonElement.classList.remove('top-[32px]');
        menuButtonElement.classList.add('top-[25px]');

        headerElement.classList.add('bg-white');
        headerElement.classList.add('shadow-lg');
    } else {
        headerElement.classList.remove('bg-white');
        headerElement.classList.remove('shadow-lg');
        menuButtonElement.classList.add('top-[32px]');
        menuButtonElement.classList.remove('top-[25px]');
        logoElement.classList.add('py-[20px]');
        logoElement.classList.remove('py-[5px]');
    }
})


$(document).ready(function() {
    $("#menu-bar-open-button").click(function() {
        $("#sp-menu").fadeIn('slow');
    });
    $("#menu-bar-close-button").click(function() {
        $("#sp-menu").fadeOut('slow');
    });
    $("#menu-bar-open-button-bottom").click(function() {
        $("#sp-menu").fadeIn('slow');
    });
});


var swiperMain = new Swiper(".main-swiper", {
    loop: false,
    slidesPerView: 5,
    spaceBetween: 5,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        500: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});


var swiperDriver = new Swiper(".driver-swiper", {
    loop: true,
    freeMode: true,
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});


var swiperTruck = new Swiper(".truck-swiper", {
    loop: true,
    freeMode: true,
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});


const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
    header.addEventListener("click", function() {
        const accordionContent = header.parentElement.querySelector(".accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;

        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
            accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
            accordionContent.classList.toggle('mt-[20px]')
            header.querySelector(".fas").classList.remove("fa-plus");
            header.querySelector(".fas").classList.add("fa-minus");
        } else {
            accordionContent.style.maxHeight = `0px`;
            accordionContent.classList.toggle('mt-[20px]')
            header.querySelector(".fas").classList.add("fa-plus");
            header.querySelector(".fas").classList.remove("fa-minus");
        }
    });
});

function tabClick(tab) {
    $('#tab-01').fadeOut('slow');
    $('#tab-02').fadeOut('slow');
    $('#tab-03').fadeOut('slow');
    $('#tab-04').fadeOut('slow');
    var tabButton_01 = document.getElementById('tabButton-01');
    var tabButton_02 = document.getElementById('tabButton-02');
    var tabButton_03 = document.getElementById('tabButton-03');
    var tabButton_04 = document.getElementById('tabButton-04');


    tabButton_01.classList.add('bg-[#E6E6E6]')
    tabButton_01.classList.add('text-[#666666]')
    tabButton_01.classList.remove('bg-[#73CC52]')
    tabButton_01.classList.remove('border-white')
    tabButton_01.classList.remove('text-white')


    tabButton_02.classList.add('bg-[#E6E6E6]')
    tabButton_02.classList.remove('bg-[#73CC52]')
    tabButton_02.classList.remove('border-white')
    tabButton_02.classList.remove('text-white')


    tabButton_03.classList.add('bg-[#E6E6E6]')
    tabButton_03.classList.remove('bg-[#73CC52]')
    tabButton_03.classList.remove('border-white')
    tabButton_03.classList.remove('text-white')

    tabButton_04.classList.add('bg-[#E6E6E6]')
    tabButton_04.classList.remove('bg-[#73CC52]')
    tabButton_04.classList.remove('border-white')
    tabButton_04.classList.remove('text-white')

    switch (tab) {
        case 1:
            $('#tab-01').fadeIn('slow');
            tabButton_01.classList.remove('bg-[#E6E6E6]')
            tabButton_01.classList.add('bg-[#73CC52]')
            tabButton_01.classList.add('text-white')
            tabButton_01.classList.add('border-b')
            tabButton_01.classList.add('border-white')
            break;
        case 2:
            $('#tab-02').fadeIn('slow');
            tabButton_02.classList.remove('bg-[#E6E6E6]')
            tabButton_02.classList.add('bg-[#73CC52]')
            tabButton_02.classList.add('text-white')
            tabButton_02.classList.add('border-b')
            tabButton_02.classList.add('border-white')
            break;
        case 3:
            $('#tab-03').fadeIn('slow');
            tabButton_03.classList.remove('bg-[#E6E6E6]')
            tabButton_03.classList.add('bg-[#73CC52]')
            tabButton_03.classList.add('text-white')
            tabButton_03.classList.add('border-b')
            tabButton_03.classList.add('border-white')
            break;
        case 4:
            $('#tab-04').fadeIn('slow');
            tabButton_04.classList.remove('bg-[#E6E6E6]')
            tabButton_04.classList.add('bg-[#73CC52]')
            tabButton_04.classList.add('text-white')
            tabButton_04.classList.add('border-b')
            tabButton_04.classList.add('border-white')
            break;
        default:
            break;
    }
}