# Select2

https://select2.github.io/

https://github.com/select2/select2

Select2是一个基于jQuery的选择框替换。
它支持搜索，远程数据集和无限滚动的结果。



Convert file to base64 🐙→👾 (png)

http://staticresource.com/base64.html



https://select2.github.io/examples.html


```js
<script type="text/javascript">
$(document).ready(function() {
    $(".js-example-basic-single").select2();
});
</script>

<select class="js-example-basic-single">
    <option value="AL">Alabama</option>
        ...
    <option value="WY">Wyoming</option>
</select>
``` 


```js
<script type="text/javascript">
$(document).ready(function() {
    $(".js-example-basic-multiple").select2();
});
</script>

<select class="js-example-basic-multiple" multiple="multiple">
    <option value="AL">Alabama</option>
        ...
    <option value="WY">Wyoming</option>
</select>
``` 



```js
<label for="id_label_single">
    Click this to highlight the single select element
    <select class="js-example-basic-single js-states form-control" id="id_label_single"></select>
</label>

<label for="id_label_multiple">
    Click this to highlight the multiple select element
    <select class="js-example-basic-multiple js-states form-control" id="id_label_multiple" multiple="multiple"></select>
</label>
``` 


```js
<script type="text/javascript">
$(".js-example-placeholder-single").select2({
    placeholder: "Select a state",
    allowClear: true
});
 
$(".js-example-placeholder-multiple").select2({
    placeholder: "Select a state"
});
</script>
``` 


```js
``` 


```js
<<script src="/javascripts/application.js" type="text/javascript" charset="utf-8" async defer>
    $(".js-data-example-ajax").select2({
        ajax: {
            url: "https://api.github.com/search/repositories",
            dataType: 'json',
            delay: 250,
            data: function(params) {
                return {
                    q: params.term, // search term
                    page: params.page
                };
            },
            processResults: function(data, params) {
                // parse the results into the format expected by Select2
                // since we are using custom formatting functions we do not need to
                // alter the remote JSON data, except to indicate that infinite
                // scrolling can be used
                params.page = params.page || 1;

                return {
                    results: data.items,
                    pagination: {
                        more: (params.page * 30) < data.total_count
                    }
                };
            },
            cache: true
        },
        escapeMarkup: function(markup) {
            return markup; }, // let our custom formatter work
        minimumInputLength: 1,
        templateResult: formatRepo, // omitted for brevity, see the source of this page
        templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
    });
</script>
``` 





```js
``` 



```js
``` 


```js
``` 




```js
``` 

