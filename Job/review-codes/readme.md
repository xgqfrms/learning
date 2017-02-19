# review-codes






http://www.cardinfolink.com/about.html

$(document).ready(function(){
    $(".downbtn").hover(
        function(){
            $(".downmenu").addClass("menudown");
        },
        function(){
            $(".downmenu").removeClass("menudown");
        }
    );
    $(".nav_right").click(function(){
        $(".body").toggleClass("body_move");
        $(".menubtn_top").toggleClass("menubtn_top_move");
        $(".menubtn_mid").toggleClass("menubtn_mid_move");
        $(".menubtn_dwn").toggleClass("menubtn_dwn_move");
        $(".mobmenu_right").toggleClass("mobmenu_right_move");
    });
});



http://www.cardinfolink.com/js/min/app-min.js



































