//加载文章
$('.load-more-cont a').live('click', function(e) {
    e.preventDefault();
    $('.load-more-text a').html('加载中...');
    $.ajax({
        type: "GET",
        url: $(this).attr('href') + '#PostList',
        dataType: "html",
        success: function(out) {
            result = $(out).find('#PostContent .pc-post-item');
            nextlink = $(out).find('.load-more-cont a').attr('href');
            $("#PostContent").append(result.fadeIn(500));
            $('.load-more-text a').html('查看更多...');
            if (nextlink != undefined) {
                $('.load-more-cont a').attr('href', nextlink);
            } else {
                $('.load-more-cont').remove();
                $('#newsContent').append('<div class="c"></div>');
            }
        }
    });
});