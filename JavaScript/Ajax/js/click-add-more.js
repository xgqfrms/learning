$(() => {
    // 计数器, offset, size
    let counter = 0,
        pageStart = 0,
        pageSize = 4;
    const getData = (offset, size) => {
        $.ajax({
            type: 'GET',
            url: `json/blog.json?${offset}/${size}`, 
            //这里offset,size无作用，仅方便调试
            dataType: 'json',
            success: (reponse) => {
                let data = reponse.list,
                    sum = reponse.list.length,
                    result = '';
                // 业务逻辑块：实现拼接html内容并append到页面
                /*
                * 如果剩下的记录数不够分页，就让分页数取剩下的记录数
                * 例如分页数是5，只剩2条，则只取2条
                * 实际 MySQL查询时不写这个不会有问题
                */
                let num = sum - offset;
                if(num < size){
                    size = num;
                }
                // 使用for循环模拟SQL里的 limit(offset,size)
                let len = offset + size;
                for(let i = offset; i < len; i++){
                    result += ` 
                        <div class="weui_media_box weui_media_text">
                            <a href="'+ data[i].url +'" target="_blank">
                            <h4 class="weui_media_title">${data[i].title}</h4>
                            </a>
                            <p class="weui_media_desc">${data[i].desc}</p>
                        </div>
                    `;
                }
                $('.js-blog-list').append(result);
                // 隐藏 click load more
                if (len >= sum){
                    $(".js-load-more").hide();
                }else{
                    $(".js-load-more").show();
                }
            },
            error: (xhr, type) => {
                alert('Ajax error!');
            }
        });
    }
    // 首次加载
    getData(pageStart, pageSize);
    // 监听加载更多(event delegation)
    $(document).on('click', '.js-load-more', () =>{
        counter ++;
        pageStart = counter * pageSize;
        getData(pageStart, pageSize);
    });
});













$(() => {
    // 初始化 结束标志
    let counter = pageStart = 0,
        pageSize = 7,
        isEnd = false;
    // Ajax
    $.ajax({
        type: 'GET',
        url: 'json/blog.json'+ '?' + offset + '/' + size, 
        //这里offset,size无作用，仅方便调试
        dataType: 'json',
        success: (reponse) => {
            let data = reponse.list,
                sum = reponse.list.length,
                result = '';
            // 业务逻辑块：实现拼接html内容并append到页面
            /*
            * 如果剩下的记录数不够分页，就让分页数取剩下的记录数
            * 例如分页数是5，只剩2条，则只取2条
            * 实际 MySQL查询时不写这个不会有问题
            */
            if(sum - offset < size ){
                size = sum - offset;
            }
            // 使用for循环模拟SQL里的limit(offset,size)
            let len = offset + size;
            for(let i = offset; i < len; i++){
                result += ` 
                    <div class="weui_media_box weui_media_text">
                        <a href="'+ data[i].url +'" target="_blank">
                        <h4 class="weui_media_title">${data[i].title}</h4>
                        </a>
                        <p class="weui_media_desc">${data[i].desc}</p>
                    </div>
                `;
            }
            $('.js-blog-list').append(result);
            //没有更多了
            if ( len >= sum){
                isEnd = true;
            }
        },
        error: (xhr, type) => {
            alert('Ajax error!');
        }
    });
    // 首次加载
    getData(pageStart, pageSize);
    // 监听加载更多
    $(window).scroll(() => {
        // ??? isEnd === true
        if(isEnd === true){
            return;
        }
        // 当滚动到最底部以上100像素时， 加载新内容
        let xHeight = $(document).height() - $(this).scrollTop() - $(this).height();
        if ( xHeight < 100){
            counter ++;
            pageStart = counter * pageSize;
            getData(pageStart, pageSize);
        }
    });
});


