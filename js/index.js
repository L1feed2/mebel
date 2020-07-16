$(document).ready(function() {
    $('.header__dropdown').niceSelect();


    $('.menu__toggler').click(function(){
        $(this).toggleClass('menu__toggler--active');
        $('.menu__dropdown').toggleClass('menu__dropdown--open');
    })


    $('.menu__burger').click(function(){
        $('.menu__list').toggleClass('menu__list--open')
    })


    $('.new__slider').slick({
        fade: true,
        nextArrow: '<div class="new__next new__arrow"><span class="icon-chevron"></span></div>',
        prevArrow: '<div class="new__prev new__arrow"><span class="icon-chevron"></span></div>',
        responsive: [
            {
                breakpoint: 860,
                settings: {
                    appendArrows: $('.new__arrows')
                }
            }
        ]
    })


    // $('.new__item--small').slick({
    //     nextArrow: '<div class="new__next new__arrow"><span class="icon-chevron"></span></div>',
    //     prevArrow: '<div class="new__prev new__arrow"><span class="icon-chevron"></span></div>',
    // })
});




