# Linux  


F:\Books\Linux-Bash all-in-one

https://www.codecademy.com/learn/learn-the-command-line


```sh
$ > 

$ < 

$ >> 

$ chomd 

$ chomd +w

$ chomd +r

$ chomd +x

$ chomd 755 

``` 

cat  



cd -

cd ~



cp 

rm 

rm -r

less 



mkdir 

touch 

echo > 

echo >>  

echo <  


man 

cowsay ???




vim  

esc + ZZ  === esc + :wq  

??? 


a    ahead  






## locate  
> system global scope (database) 

$ locate --regexp ???

> dir scope (database) 

> update database  

$ sudo updatedb  

## find  
> dir scope (file system)  

$ find .

$ find .|grep .txt

$ find . -type f

$ find . -type d

$ find . -type f -exec ls -al '{}' ';'

$ find . -type f -exec ls -al -n '{}' ';' -print

$ find . -type f -exec ls -al -n '{}' ';' -print

$ find . -type f -exec ls -al  -ni '{}' ';' -print

## grep  


ln s grap xxx 


link symbol  xxx === grep 




## ack  

ack 2.14 is a tool like grep, optimized for programmers 

http://beyondgrep.com/  






#!/user/bin/env bash

指定执行 shell版本 === bash








