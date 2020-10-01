// $(document).ready(function() {
//     $('.slider').slick({
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         autoplay: true,
//         autoplaySpeed: 1000
//     });
// });

$(document).ready(function() {
    $('.corousel-inner ').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow_LEFT.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow_RIGHT.png"></button>'
    });

    $('.single-item').slick({
        autoplay: false,
        autoplaySpeed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow_LEFT.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow_RIGHT.png"></button>'
    });
    $('.corousel-second').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow_left_light.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow_right_light.png"></button>',

    });
    //modals
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #contact_request').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #feedback, #thanks').fadeOut('slow');
    });
    $('.modal__close').on('click', function() {
        $('.second_overlay, #consultation, #feedback, #thanks').fadeOut('slow');
    });

    $('[data-modal=feedback]').on('click', function() {
        $('.overlay, #contact_feedback').fadeIn('slow');
    });
    // $('.modal');
});
$('#consultation-form').validate({
    rules: {
        name: "required",
        phone: "required",
        email: {
            required: true,
            email: true
        }
    }
});

function valideForms(form) {
    $(form).validate({

        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста, ведите свое имя",
            phone: "Пожалуйста, ведите свой номер",
            email: {
                required: "Пожалуйста, ведите свою почту",
                email: "Почта должна быть в формате name@domain.com"
            }
        }
    });
}
valideForms('#overlay-form');
valideForms('#call_request');
valideForms('#model-request');