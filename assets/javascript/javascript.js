var shortcutClicked = false;

// Scroll animation to clicked section
$(".header-shortcut").on("click", function(){
    var scrollElId = $(this).html();
    scrollElId = scrollElId.toLowerCase();
    scrollElId = scrollElId.replace(" ", "-");
    
    // Don't run if in the middle of an animation
    if(!shortcutClicked){
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + scrollElId).offset().top - $(".section-header").outerHeight()
        }, 1000);
        shortcutClicked = true;

        setTimeout(function(){
            shortcutClicked = false;
        }, 1000);
    }
});

$('.dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
}, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
});