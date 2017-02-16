$(document).ready(function() {
    $("#getMessage").on("click", function() {  
        $.getJSON("https://cdn.xgqfrms.xyz/json/cat.json", function(json) {
            var html = "";
            // Only change code below this line.
            json = json.filter(function(val) {
                return (val.id !== 1); 
            });
            // Only change code above this line.
            json.forEach(function(val) {
                html += "<div class = 'cat'>"
                html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"
                html += "</div>"
            });    
            $(".message").html(html);  
        });
    });
    $("#deleteAll").on("click", function() { 
        $('.cat').remove(); 
    });
});
