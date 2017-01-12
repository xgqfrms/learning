// secure your HTTP cookies against XSS 



/*

为了减轻这些攻击，你必须在 set-cookie HTTP头上设置标志：



HttpOnly  


此属性用于帮助防止跨站点脚本等攻击，因为它不允许通过JavaScript访问cookie。



secure  

此属性告诉浏览器只有在通过HTTPS发送请求时才发送cookie。


*/
