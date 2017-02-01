# CSS counter-increment


http://2016.js13kgames.com/#winners

http://js13kgames.com/style.css?v=2016v2
http://js13kgames.com/


## demo

http://2016.js13kgames.com/style.css?v=2016v2

counter-increment: rule;
// (0,1,2, ...)
content: counter(rule); 
// (0)

http://js13kgames.com/style.css?v=2016v2
http://js13kgames.com/



.winner h3:before {
    counter-increment: rule;
    content: counter(rule);
    background: url(/img/trophy.png) no-repeat;
    display: inline-block;
    width: 85px;
    height: 80px;
    line-height: 44px;
    font-size: 28px;
    text-align: center;
    padding-right: 15px;
    margin-left: 10px;
    text-shadow: 0px 1px 0px #eb6e76;
    margin-bottom: 5px;
}


#rules {
    counter-reset: rule;
}

.rule {
    margin-bottom: 0;
    padding: 10px 20px 0;
    border-bottom: 1px dotted #F2F2FA;
}

.rule h3 {
    font-size: 20px;
}

.rule h3:before {
    counter-increment: rule;
    content: counter(rule);
    background: url(/img/ribbon_arrow.png) no-repeat;
    display: inline-block;
    width: 82px;
    height: 53px;
    line-height: 44px;
    font-size: 28px;
    text-align: center;
    padding-right: 15px;
    margin-left: -31px;
    text-shadow: 0px 1px 0px #eb6e76;
    margin-bottom: 5px;
}

