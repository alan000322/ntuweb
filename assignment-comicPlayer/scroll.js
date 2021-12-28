$(function() {
    // let winh = $(window).height();
    $(window).scroll(function() {
        let scrolled = $(window).scrollTop();
        let cache = 0
            // console.log(scrolled)
        $(".slideanimate").each(function() {
            if (scrolled > $(this).data("pos")) {
                cache = $(this).data("pos")
                    // console.log(cache, 'cache')
                $(this).addClass(
                    "animate__animated slide animate__" + $(this).data("direction")
                );
            }

            if (scrolled > cache + 980) {
                $(this).removeClass(
                    "animate__animated slide animate__" + $(this).data("direction")
                );
            }
            if (scrolled == 0 || scrolled > 7000) {
                $(this).removeClass(
                    "animate__animated slide animate__" + $(this).data("direction")
                );
            }


        });
    });
});