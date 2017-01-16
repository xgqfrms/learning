if (new Date().getFullYear() <= 2017) {
    $.include("js/countdown.js").then(function(){
        let datesTable = $("#dates table");
        let times = $$("time", datesTable);

        for (let time of times) {
            let td = time.closest("td");
            let date = new Date(time.getAttribute("datetime"));
            let diff = time._.data.diff = time._.data.diff || new CountDown(date);

            let countdown = time.nextElementSibling || $.create("em", {
                className: "countdown",
                after: time
            });

            diff.animate(countdown, {
                callback: function(){
                    if (this.past) {
                        time.closest("tr").classList.add("passed");
                        $.remove(countdown);
                        return false;
                    }
                }
            });
        }
    });
}