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
        // var hl = document.getElementById('hl');
        // hl.style.display = "none";
        const hideLoad = document.getElementById('hideLoad');
        let state = "showTure";
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

# DOM & ES6 

querySelector() & querySelectorAll() 

```js

const ES6 = () => {
    const abc = { language: "english"};
    let xyz = `xyz === ${abc}`;
    console.log(xyz);
    let newxyz = `newxyz === ${abc.length}`;
    console.log(newxyz);
}

ES6();

const ES7 = () => {
    const abc = { language: "english"};
    let xyz = `xyz === ${abc}`;
    console.log(xyz);
    let newxyz = `newxyz === ${abc.language}`;
    console.log(newxyz);
}

ES7();

``` 


*/

/*


https://www.codeschool.com/users/xgqfrms

https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/700/try-docker-1a004d3fd48268281985771485fd8405.png

https://github.com/codeschool-projects/jQueryBadgesProject





https://codeschool-project-demos.github.io/jQueryBadgesProject/

https://www.codeschool.com/users/xgqfrms.json



https://www.codeschool.com/users/xgqfrms.json

https://learning.xgqfrms.xyz/JavaScript/Ajax/Ajax-Portfolio.html

https://github.com/codeschool-projects




*/












