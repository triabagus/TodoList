$(document).ready(function () {

    $('.icon').on('click', function () {
        $(this).toggleClass('active');

        if ($('.active').length > 0) {
            $('.button').slideDown();
        } else {
            $('.button').slideUp();
        }

        // var status;
        // $('.active').each(function () {
        //     this.attr("value") = status;
        // });

        $('.delete').on('click', function () {
            $('.active').parent().slideUp();
            $('.button').slideUp();

            var id = $('.active').map(function () {
                return $(this).attr('value');
            }).get().join(",");

            $.ajax({
                type: 'POST',
                url: "/api/get",
                data: id,
                timeout: 10000,
                success: function (data) {
                    // location.reload();
                    if (data.status)
                        window.location = data.url
                }
            });

            // alert(id);

        });
        // event.preventDefault();
    });

});