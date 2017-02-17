# Request



Anatomy of a Request

An HTTP request is made up of three parts:

The request line, 
which tells the server what kind of request is being sent (GET, POST, etc.) and what resource it's looking for;

The header, 
which sends the server additional information (such as which client is making the request);


The body, 
which can be empty (as in a GET request) or contain data (if you're POSTing or PUTing information, that information is contained here).





1. request line 

```
POST /codecademy/learn-http HTTP/1.1
```

2. request header

3. request body



```
POST /codecademy/learn-http HTTP/1.1

Host: www.codecademy.com

Content-Type: text/html; charset=UTF-8

Name=Eric&Age=26

```
















