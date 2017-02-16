/* 
https://github.com/freeCodeCamp/freeCodeCamp/wiki/Challenge-Get-JSON-With-The-JQuery-GetJSON-Method
https://gist.github.com/xgqfrms-GitHub/66e3391145e249501b1c4291e6441ee9
https://gist.githubusercontent.com/xgqfrms-GitHub/66e3391145e249501b1c4291e6441ee9/raw/8902697d074e03e72e5f1df5ecbc2a2728b26de9/cats.json
https://codefree-xgqfrms.c9users.io/freecode/json/cats.json

https://www.freecodecamp.com/json/cats.json

*/

/* $(document).ready(function() {
        $("#getMessage").on("click", function() {
            $.getJSON("https://www.freecodecamp.com/json/cats.json", function(json) {
                var html = "";
                // Only change code below this line.
                json.forEach(function(val) {
                    var keys = Object.keys(val);
                    console.log( keys );
                    html += "<div class = 'cat'>";
                    keys.forEach(function(key) {
                        html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
                        //
                    });
                    html += "</div><br>";
                });
                // Only change code above this line.
                $(".message").html(html);
            });
        });
    }); */

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
        $("div.cat").remove();
    });
});
