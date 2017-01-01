// main.js

$(function() {
    $.ajax({
        url: 'https://cdn.xgqfrms.xyz/json/badges.json',
        dataType: 'json',
        success: function(data) {
            populateWithCourses(data.courses.completed);
            hide();
        }
    });
    function populateWithCourses(courses) {
        var $badges = $('#badges');
        courses.forEach(function(course) {
            $div = $('<div />', {
                'class': 'course'
            }).appendTo($badges);
            $('<h3 />', {
                text: course.title
            }).appendTo($div);
            $('<img />', {
                src: course.badge
            }).appendTo($div);
            $('<a />', {
                'class': 'btn btn-primary',
                target: '_blank',
                href: course.url,
                text: 'See Course'
            }).appendTo($div);
        });
    }
    function hide(){
        // var hl = document.getElementById('hl');
        // hl.style.display = "none";
        var hideLoad = document.getElementById('hideLoad');
        var state = "showTure";
        if (state === "showTure") {
            hideLoad.classList.remove('showTure');
            hideLoad.classList.add("hidenTure");
            console.log(`state = "showTure"`);
            hideLoad.style.display = "none";
            // ??? .classList bugs ??? 
        } else {
            //state = "showTure";
            console.log(`state = "hidenTure"`);
        }
    }
});

/*
ES 6

selectQueryAll ??? DOM 

let = () => {
    let = ;
}



*/