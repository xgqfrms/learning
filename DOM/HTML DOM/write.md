# write






write() 方法将HTML表达式或JavaScript代码写入文档。 
write() 方法主要用于测试：
如果在HTML文档完全加载后使用它，它将删除所有现有的HTML。


当此方法不用于测试时，通常用于将一些文本写入由document.open() 方法打开的输出流。



提示：document.writeln()方法类似于write() ，只有在每个语句之后添加一个换行符。




document.write(exp1, exp2, exp3, ...)


exp1, exp2, exp3, ... 

可选的。要写入输出流的内容。可以列出多个参数，它们将按照出现的顺序附加到文档






