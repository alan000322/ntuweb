$(document).ready(function() {
    let win_h = $(window).height();
    $(window).scroll(function() {
        let scrolled = $(window).scrollTop();
        $(".scrollable").each(function() {
            let parent_pos = $(this).parent().offset().top;
            let next_pos = parent_pos + $(this).parent().height();
            let parent_scrolled = scrolled - $(this).parent().offset().top;
            console.log('left', ($(this).data('left2') - $(this).data('left')), parent_scrolled)
            console.log('top', ($(this).data('top2') - $(this).data('top')), parent_scrolled)
            if (parent_scrolled > 0 && scrolled < next_pos - win_h) {

                if ($(this).attr("data-left")) {
                    $(this).css('left', (($(this).data('left2') - $(this).data('left')) * parent_scrolled * 0.1))
                }
                if ($(this).attr("data-top")) {
                    $(this).css('top', (($(this).data('top2') - $(this).data('top')) * parent_scrolled * 0.01))
                }
            }
        });
    });
});