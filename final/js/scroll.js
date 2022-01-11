$(function() {


    // plan img
    $(window).scroll(function() {
        $(".pic").each(function() {
            var opRange = $(window).height();
            $(this).css({
                opacity: ($(this).data("seq") * opRange - $(document).scrollTop() + $(".plan").offset().top) / opRange
            });
        });
    });

    // sue word
    $(window).scroll(function() {
        let scrolled = $(window).scrollTop();
        let scrolled_article = $(".article").offset().top - 150;
        console.log(scrolled, scrolled_article)
        $(".slideanimate").each(function() {
            // console.log(scrolled, $(this).data("pos"))
            if (scrolled > scrolled_article) {
                console.log('right')

                $(this).addClass(
                    "slide animate__animated animate__fadeIn"
                );
            }



        });
    });



});