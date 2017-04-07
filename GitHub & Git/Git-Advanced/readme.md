# Git-Advanced 


## Git & Shell (symbolic links, alias)

https://gist.github.com/xgqfrms-GitHub/c4a0d3eebcf71a23a32af2aaff34b652


# Git-Aliases Git 别名


https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-Git-%E5%88%AB%E5%90%8D

https://git-scm.com/book/tr/v2/Git-Basics-Git-Aliases


```sh
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status

``` 



## aliases

https://githowto.com/aliases


```sh 

git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.br branch
git config --global alias.hist "log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"
git config --global alias.type 'cat-file -t'
git config --global alias.dump 'cat-file -p'

``` 

.gitconfig

```sh

[alias]
    co = checkout
    ci = commit
    st = status
    br = branch
    hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
    type = cat-file -t
    dump = cat-file -p


```
.profile

```sh


alias gs='git status '
alias ga='git add '
alias gb='git branch '
alias gc='git commit'
alias gd='git diff'
alias go='git checkout '
alias gk='gitk --all&'
alias gx='gitx --all'

alias got='git '
alias get='git '

``` 











## tag & branch


## rollback



## conflict



## change old commit















https://learning.xgqfrms.xyz/JavaScript/Ajax/Ajax-Portfolio.html






F:\Books\All-it-ebooks\Node



https://keyholesoftware.com/2017/02/27/learning-angular-crud/



https://babeljs.io/docs/plugins/transform-decorators/


