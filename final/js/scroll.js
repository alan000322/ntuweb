$(function() {



    $(window).scroll(function() {
        $(".pic").each(function() {
            var opRange = $(window).height();
            $(this).css({
                opacity: ($(this).data("seq") * opRange - $(document).scrollTop() + $(".plan").offset().top) / opRange
            });
        });
    });


});