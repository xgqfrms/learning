// main.js

$(function() {
    $.ajax({
        url: 'https://cdn.xgqfrms.xyz/json/xgqfrms.json',
        dataType: 'json',
        success: function(data) {
            populateWithCourses(data.courses.completed);
            populateWithCourses(data.courses.in_progress);
            hide();
        }
    });
    populateWithCourses = (courses) => {
        const $badges = $('#badges');
        console.log(`courses`, courses);
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
    const hide = () => {
        const hideLoad = document.getElementById('hideLoad');
        let state = "showTure";
        if (state === "showTure") {
            hideLoad.classList.remove('showTure');
            hideLoad.classList.add("hidenTure");
            console.log(`state = "showTure"`);
            hideLoad.style.display = "none";
        } else {
            console.log(`state = "hidenTure"`);
        }
    }
});








