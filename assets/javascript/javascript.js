$(".header-shortcut").on("click", function(){
    var scrollElId = $(this).html();
    scrollElId = scrollElId.toLowerCase();
    scrollElId = scrollElId.replace(" ", "-");
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#" + scrollElId).offset().top - $(".section-header").outerHeight()
    }, 1000);
});