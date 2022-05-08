var repoFavoritesAll = [];
var repoFavorites = [];
var repoImageUrls = [];
var repoImageDownloadUrls = [];

// var getUserRepos = function(user) {
//     // format the github api url
//     var apiUrl = "https://api.github.com/users/jacee94/repos";
  
//     // make a request to the url
//     fetch(apiUrl).then(function(response) {
//         // request was successful
//         if (response.ok) {
//             response.json().then(function(data) {
//                 checkRepoFavorites(data);
//             });
//         } else {
//             alert('Error: GitHub User Not Found');
//         }
//     })
// }

// // Iterate through repositories looking for favorites
// function checkRepoFavorites(repoData){
//     for(var i = 0; i < repoData.length; i++){
//         var fav = repoData[i].topics[0];
//         if(fav){
//             if(fav == "favorite"){
//                 var userObj = {
//                     login: repoData[i].owner.login,
//                     repo: repoData[i].name
//                 }
//                 repoFavoritesAll.push(repoData[i]);
//                 repoFavorites.push(userObj);
//             }
//         }
//     }

//     createProjectCards(true);
// }

// function getReposInfo(index){
//     // format the github api url
//     var apiUrl = "https://api.github.com/repos/" + repoFavorites[index].login + "/" + repoFavorites[index].repo +"/contents/assets/images/screenshot.JPG";
//     repoImageUrls.push(apiUrl);

//     //Request Image download URLS from each repos assets folder
//     fetch(repoImageUrls[index]).then(function(response) {
//         // request was successful
//         if (response.ok) {
//             response.json().then(function(data) {
//                 var downloadURL = data.download_url;
//                 $("img[dataset-uid='" + index + "'").attr("src", downloadURL);
//             });
//         } else {
//             alert('Error: GitHub REPO not found');
//         }
//     })
// }

// function getRepoDeploymentUrl(index){
//     var deploymentsUrl = repoFavoritesAll[index].deployments_url;

//     fetch(deploymentsUrl).then(function(response){
//         if(response.ok){
//             response.json().then(function(data){
//                 console.log(data);
//                 // Go deeper down the rabbit hole
//                 var depId = data[0].id;
//                 fetch(deploymentsUrl + "/" + depId + "/statuses").then(function(response2){
//                     if(response2.ok){
//                         response2.json().then(function(data2){
//                             console.log(data2[0].environment_url);
//                             $("a[dataset-uid='"+ index + "'").attr("href", (data2[0].environment_url));
//                         })
//                     }
//                 })
//             });
//         }
//     });
// }

// function createProjectCards(fav){
//     // If we're creating my favorite projects, then use repoFavorites array
//     if(fav){
//         for(var i = 0; i < repoFavorites.length; i++){
//             //Create card element
//             var card = $("<div>")
//                 .addClass("card project")
//                 .attr("style", "width: 300px;")
//                 .attr("dataset-uid", i);
            
//             var img = $("<img>")
//                 .addClass("card-img-top")
//                 .attr("dataset-uid", i)
//                 .attr("style","height:200px; object-fit: cover")

//             var divbody = $("<div>")
//                 .addClass("card-body")
            
//             var cardTitle = $("<h5>")
//                 .addClass("card-title")
//                 .html(repoFavoritesAll[i].name);
            
//             var cardP = $("<p>")
//                 .addClass("card-text")
//                 .html(repoFavoritesAll[i].description)

//             var btnHolder = $("<div>")
//                 .addClass("btn-holder")

//             var gitHubBtn = $("<a>")
//                 .addClass("btn project-btn")
//                 .attr("href", repoFavoritesAll[i].html_url)
//                 .html("Repo Link!")
//                 .attr("role", "button")
//                 .attr("target", "_blank");
            
//             var liveBtn = $("<a>")
//                 .addClass("btn project-btn")
//                 .html("Deployed Page!")
//                 .attr("role", "button")
//                 .attr("target", "_blank")
//                 .attr("dataset-uid", i);
            
//             btnHolder.append(gitHubBtn,liveBtn);
//             divbody.append(cardTitle, cardP, btnHolder);
//             card.append(img, divbody);
//             $(".project-container").append(card);
            
//             getRepoDeploymentUrl(i);
//             getReposInfo(i);
//         }
//     }
// }

// getUserRepos();



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

    parentHeight = $(".projects-title").outerHeight();
    selfHeight = $("#projects-tooltip-btn").outerHeight();
    posTop = (parentHeight/2) - (selfHeight/2);
    $("#projects-tooltip-btn").css("transform","translateX(10px)").css("top", posTop + "px").css("position", "absolute");
})

$('.dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
}, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
});

$(".dropdown-menu").width($("#dropdownMenuButton").outerWidth() + "px");

// Bootstrap enable tooltips code
$("#projects-tooltip-btn").tooltip();

var parentHeight = $(".projects-title").outerHeight();
var selfHeight = $("#projects-tooltip-btn").outerHeight();
var posTop = (parentHeight/2) - (selfHeight/2);
$("#projects-tooltip-btn").css("transform","translateX(10px)").css("top", posTop + "px").css("position", "absolute")

// Bootstrap enable popover code
$("#skills-popover").popover()