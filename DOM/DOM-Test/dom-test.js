document.onclick = function() {
    console.info('可视区高');
    console.log("document.documentElement.clientHeight", document.documentElement.clientHeight);
    console.log("window.innerHeight", window.innerHeight);
    console.info('可视区滚动的高度');
    console.log("document.body.scrollTop", document.body.scrollTop);
    console.log("window.pageYOffset", window.pageYOffset);
    console.info('文档元素高度 == body被撑开的高度(+padding+border+margin)');
    console.log("document.documentElement.offsetHeight", document.documentElement.offsetHeight);
    console.log("document.body.scrollHeight", document.body.scrollHeight);
    console.info('含边框的body，不含边框的body，和普通元素一样');
    console.log("document.body.offsetHeight", document.body.offsetHeight);
    console.log("document.body.clientHeight", document.body.clientHeight);
    console.info('由于没有offsetParent，offsetTop对于文档元素和body不太好用');
    console.log("document.documentElement.offsetTop", document.documentElement.offsetTop);
    console.log("document.body.offsetTop", document.body.offsetTop);

    console.info('浏览器相关高度信息');
    console.log("window.screenTop", window.screenTop);
    console.log("window.screen.height", window.screen.height);
    console.log("window.screen.availHeight", window.screen.availHeight);
};

const domTest = () => {
    console.info('可视区高');
    console.log("document.documentElement.clientHeight", document.documentElement.clientHeight);
    console.log("window.innerHeight", window.innerHeight);
    console.info('可视区滚动的高度');
    console.log("document.body.scrollTop", document.body.scrollTop);
    console.log("window.pageYOffset", window.pageYOffset);
    console.info('文档元素高度 == body被撑开的高度(+padding+border+margin)');
    console.log("document.documentElement.offsetHeight", document.documentElement.offsetHeight);
    console.log("document.body.scrollHeight", document.body.scrollHeight);
    console.info('含边框的body，不含边框的body，和普通元素一样');
    console.log("document.body.offsetHeight", document.body.offsetHeight);
    console.log("document.body.clientHeight", document.body.clientHeight);
    console.info('由于没有offsetParent，offsetTop对于文档元素和body不太好用');
    console.log("document.documentElement.offsetTop", document.documentElement.offsetTop);
    console.log("document.body.offsetTop", document.body.offsetTop);

    console.info('浏览器相关高度信息');
    console.log("window.screenTop", window.screenTop);
    console.log("window.screen.height", window.screen.height);
    console.log("window.screen.availHeight", window.screen.availHeight);
};
domTest();
