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
    $("#homemenu").click(function () {
        if (homeShowing === false) {
            if (projShowing === true) {
                closeProj();
            }
            $("#home").slideToggle();
            homeShowing = true;
        }
    });

    $("#projectsmenu").click(function () {
        if (projShowing === false) {
            if (homeShowing === true) {
                closeHome();
            }
            $("#projects").slideToggle();
            projShowing = true;
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


});