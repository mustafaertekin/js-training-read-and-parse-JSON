function loadBlogposts() {
    //ToDo: Read the Blogposts from the JSON-Placeholder-API
    //Use an AJAX-GET call with the following URL: http://jsonplaceholder.typicode.com/posts
    //you can loop through the posts and show them in the html
    var inhaltJSON = $.get("http://jsonplaceholder.typicode.com/posts", function (pData, pStatus) {
        if (pStatus == "success") {
            //we have JSON data as object (jQuery has parsed it)
            showBlogPost(pData);
        } else {
            alert("Error");
        }
    })
}


$(document).ready(function () { //adds event-listener on button
    $(".js-load-blogposts").on("click", function () {
        loadBlogposts();
    });
});

function showBlogPost(dataToShow) {
    $("#js-content").empty();
    dataToShow.forEach(function (pBlogPost) {
        var title = pBlogPost.title;
        var body = pBlogPost.body;

        $("#js-content").append(`<h3>${title}</h3><p>${body}</p><hr/>`);
    });
}