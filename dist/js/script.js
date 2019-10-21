$(document).ready(function () {

    $('.icon').on('click', function () {
        $(this).toggleClass('active');

        if ($('.active').length > 0) {
            $('.button').slideDown();
        } else {
            $('.button').slideUp();
        }

        $('.delete').on('click', function () {
            $('.active').parent().slideUp();
            $('.button').slideUp();
        });

    });

});