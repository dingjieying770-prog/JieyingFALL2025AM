$(document).ready(function () {

    var images = [
        "images/images02.jpg",
        "images/images04.jpg",
        "images/images17.jpg",
        "images/images18.jpg",
        "images/images19.jpg",
        "images/images20.jpg",
        "images/images21.jpg"
    ];
    var i = 0;

    $("#photo-switcher").click(function () {

        $("#gallery-image").fadeOut("slow", function () {
            i++;
            if (i >= images.length) {
                i = 0;
            }
            $(this).attr("src", images[i]);
            $(this).fadeIn("slow");
        });

    });
});