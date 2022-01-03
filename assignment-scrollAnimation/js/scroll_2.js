$(function() {
    $(window).scroll(function() {
        let scrolled_2 = $(window).scrollTop();
        $(".slideanimate_2").each(function() {
            // console.log(scrolled_2)
            if (scrolled_2 > $(this).data("pos")) {

                $(this).addClass(
                    "animate__animated slide_2 animate__" + $(this).data("direction")
                );
                // console.log("animate__animated slide_2 animate__" + $(this).data("direction"))
            }
            if (scrolled_2 == 0 || scrolled_2 < 7000 || scrolled_2 > 9500) {
                $(this).removeClass(
                    "animate__animated slide_2 animate__" + $(this).data("direction")
                );

            }
        });
    });
});