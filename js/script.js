// Scroll To Top Button 
scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() { scrollEvent() };

function scrollEvent() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Portfolio section - filters
var show_time_ms = 300;

$(document).ready(function() {
    $(".filter-btn").click(function() {
        var filter_val = $(this).attr('data-filter');

        if (filter_val == "all-filter") {
            $('.all-filter').addClass("active")
                .show(show_time_ms);
        } else {
            $(".all-filter").not('.' + filter_val).removeClass("active")
                .hide(show_time_ms);
            $('.all-filter').filter('.' + filter_val).addClass("active")
                .show(show_time_ms);

        }
    });
});