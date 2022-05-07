var repoFavorites = [];
var repoImageUrls = [];
var repoImageDownloadUrls = [];

var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/jacee94/repos";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
        // request was successful
        if (response.ok) {
            response.json().then(function(data) {
                checkRepoFavorites(data);
            });
        } else {
            alert('Error: GitHub User Not Found');
        }
    })
}

// Iterate through repositories looking for favorites
function checkRepoFavorites(repoData){
    for(var i = 0; i < repoData.length; i++){
        var fav = repoData[i].topics[0];
        if(fav){
            if(fav == "favorite"){
                var userObj = {
                    login: repoData[i].owner.login,
                    repo: repoData[i].name
                }
                repoFavorites.push(userObj);
            }
            
        }
    }

    getReposInfo();
}

function getReposInfo(){
    // format the github api url
    for(var i = 0; i < repoFavorites.length; i++){
        var apiUrl = "https://api.github.com/repos/" + repoFavorites[i].login + "/" + repoFavorites[i].repo +"/contents/assets/images/screenshot.JPG";
        repoImageUrls.push(apiUrl);
    }

    console.log(repoImageUrls);

    // Request Image download URLS from each repos assets folder
    for(var i = 0; i < repoImageUrls.length; i++){
        fetch(repoImageUrls[i]).then(function(response) {
            // request was successful
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                });
            } else {
                alert('Error: GitHub REPO not found');
            }
        })
    }
}

getUserRepos();



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
        }, 750);
    }
});

// Drop down navigation functionality

$(window).resize(function(){
    $(".dropdown-menu").width($("#dropdownMenuButton").outerWidth() + "px");
})

$('.dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
}, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
});

$(".dropdown-menu").width($("#dropdownMenuButton").outerWidth() + "px");
