# void


https://www.tutorialspoint.com/javascript/javascript_void_keyword.htm

void是JavaScript中的一个重要关键字，可以用作在其单个操作数之前出现的一元运算符，该运算符可能是任何类型的。
此运算符指定要求值而不返回值的表达式。


```js
<script type="text/javascript">
  <!--
     // void func()
     javascript:void func()
  
     or:
  
     // void(func())
     javascript:void(func())
  //-->
</script>



这个操作符最常见的用法是在一个客户端的javascript：URL中，它允许你评估表达式的副作用，而浏览器不显示评估表达式的值。


<a href="javascript:void(alert('Warning!!!'))">Click me!</a>


看看下面的例子。以下链接不执行任何操作，因为表达式“0”对JavaScript没有影响。这里表达式“0”被评估，但是没有被加载回当前的文档。


<a href="javascript:void(0)">Click me!</a>



void的另一个用法是故意生成未定义的值，如下所示。


function getValue(){
   var a,b,c;
   a = void( b = 5, c = 7 );
   document.write('a = ' + a + ' b = ' + b +' c = ' + c );
}


<input type="button" value="Click Me" onclick="getValue();" />






try...catch...finally 


https://www.tutorialspoint.com/javascript/javascript_error_handling.htm

```js

try {
     // Code to run
     [break;]
  } 
  catch ( e ) {
     // Code to run if an exception occurs
     [break;]
  }
  [ finally {
     // Code that is always executed regardless of 
     // an exception occurring
  }]

``` 
try块后面必须有一个catch块或一个finally块（或两者之一）。


当try块发生异常时，异常被放在e中，并且catch块被执行。
可选finally块在try / catch之后无条件执行。


```js

function myFunc(){
   var a = 100;
   try {
      alert("Value of variable a is : " + a );
   }
   catch ( e ) {
      alert("Error: " + e.description );
   }
   finally {
      alert("Finally block will always execute!" );
   }
}

```



您可以使用throw语句来提升您的内置异常或定制异常。
以后可以捕获这些异常，您可以采取适当的措施。



```js

function myFunc(){
   var a = 100;
   var b = 0;
   try{
      if( b === 0 ){
         throw( "Divide by zero error." ); 
      }else{
         var c = a / b;
      }
   }
   catch(e) {
      alert("Error: " + e );
   }
}

```

您可以使用字符串，整数，布尔或对象在一个函数中引发异常，然后可以在与上述相同的函数中捕获该异常，或者在使用try ... catch块的另一个函数中捕获该异常。




onerror事件处理程序是促进JavaScript中错误处理的第一个功能。


当页面发生异常时，会在window对象上触发错误事件。

```js

window.onerror = function () {
   alert("An error occurred.");
}

``` 

onerror事件处理程序提供三条信息来标识错误的确切性质


错误消息 - 浏览器将针对给定错误显示的消息 
URL - 发生错误的文件 
行号 - 导致错误的给定URL中的行号


```js
window.onerror = function (msg, url, line) {
   alert("Message : " + msg );
   alert("url : " + url );
   alert("Line number : " + line );
}

```

<img src="myimage.gif" onerror="alert('An error occurred loading the image.')" />


您可以使用onerror与许多HTML标签来显示适当的消息，以防发生错误。



## Developers Best Practices Tutorial 开发人员最佳实践指南

https://www.tutorialspoint.com/developers_best_practices/index.htm






## JavaScript Built-in Functions

https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm


https://www.tutorialspoint.com/javascript/number_tofixed.htm

number.toFixed( [digits] )




## Javascript Questions and Answers

https://www.tutorialspoint.com/javascript/javascript_questions_answers.htm




https://www.tutorialspoint.com/javascript/javascript_online_test.htm

https://www.tutorialspoint.com/javascript/javascript_interview_questions.htm

https://www.tutorialspoint.com/javascript/javascript_mock_test.htm





https://www.tutorialspoint.com/questions_and_answers.htm


https://www.tutorialspoint.com/restful/restful_online_quiz.htm

https://www.tutorialspoint.com/data_structures_algorithms/data_structures_algorithms_mock_test.htm



https://www.tutorialspoint.com/effective_resume_writing.htm


Qualifications Experience Achievements Capabilities, and Qualities

资格 经验 成就 能力 品质




https://www.tutorialspoint.com/computer_glossary.htm

https://www.tutorialspoint.com/computer_whoiswho.htm





https://developer.mozilla.org/zh-CN/docs/Web/JavaScript


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript




Object.is()


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is

