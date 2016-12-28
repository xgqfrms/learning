createSnow('', 60);
$(document).ready(
    function() {
        $("#myCarousel").mouseover(
            function() {
                $(".control").removeClass("hide");
            }
        );
        $("#myCarousel").mouseout(
            function() {
                $(".control").addClass("hide");
            }
        );
        $("#csl_bar li").click(
            function() {
                $(this).addClass("act");
                $(this).children('a').addClass("col");
                $(this).siblings('li').removeClass("act");
                $(this).siblings('li').children('a').removeClass("col");
            }
        );
        //轮播时间
        setInterval(function() { $("#myCarousel").carousel('next') }, 3000)
    }

);
