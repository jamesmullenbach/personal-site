$(document).ready(function () {
    $("#projects").slideToggle();
    $("#resume").slideToggle();
    $('.left ul li').hover(function () {
        $(this).fadeTo(100, 0.5);
    }, function () {
        $(this).fadeTo(100, 1.0);
    });

    $('.left img').hover(function () {
        $(this).fadeTo(100, 0.5);
    }, function () {
        $(this).fadeTo(100, 1.0);
    });

    var homeShowing = true;
    var projShowing = false;
    var resumeShowing = false;
    $("#homemenu").click(function () {
        if (homeShowing === false) {
            if (resumeShowing === true) {
                closeResume();
            } else if (projShowing === true) {
                closeProj();
            }
            $("#home").slideToggle();
            //$("#home").css("display", "block");
            homeShowing = true;
        }
        //$("#home").slideToggle("medium");
    });

    $("#projectsmenu").click(function () {
        if (projShowing === false) {
            if (homeShowing === true) {
                closeHome();
            } else if (resumeShowing === true) {
                closeResume();
            }
            $("#projects").slideToggle();
            //$("#projects").css("display", "block");
            projShowing = true;
        }
    });

    $("#resumemenu").click(function () {
        if (resumeShowing === false) {
            if (homeShowing === true) {
                closeHome();
            } else if (projShowing === true) {
                closeProj();
            }
            $("#resume").slideToggle();
            //$("#resume").css("display", "block");
            resumeShowing = true;
        }
    });

    var closeHome = function () {
        $("#home").slideToggle();
        homeShowing = false;
    }
    var closeProj = function () {
        $("#projects").slideToggle();
        projShowing = false;
    }
    var closeResume = function () {
        $("#resume").slideToggle();
        resumeShowing = false;
    }



    var colors = ["rgb(0, 0, 0)", "rgb(51, 51, 51)", "rgb(102, 102, 102)", "rgb(153, 153, 153)", "rgb(204, 204, 204)", "rgb(255, 255, 255)"];
    var i = 4;
    $("h2 div").click(function () {
        i = (i + 1) % 6;
        $("h2").css("color", colors[i]);
    });


});