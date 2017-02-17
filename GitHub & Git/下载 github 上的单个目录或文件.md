# 下载 github 上的单个目录或文件



http://www.runoob.com/w3cnote/svn-co-github-dir.html


Branchs === trunk




github 上的项目，使用 git clone 

只能下载整个项目，有时候我们可能只需要当个目录或者文件，这时我们就可以使用 svn 命令来操作。

主要修改部分在打开的目录文件的 URL 中：将 /tree/master/（或 /tree/分支/） 换成 /trunk/ 。

实例 1 ：/tree/master/

例如我们要拷贝 https://github.com/Mooophy/Cpp-Primer 项目下的 ch03 目录。

1、先打开鼠标点击 ch03 目录，复制 URL 地址：
https://github.com/Mooophy/Cpp-Primer/tree/master/ch03

2、将 /tree/master/ 换成 /trunk/，使用 svn 命令即检出:
svn co https://github.com/Mooophy/Cpp-Primer/trunk/ch03


实例 2 ：/tree/分支/

比如我要下载 https://github.com/numbbbbb/the-swift-programming-language-in-chinese/ 下的 source 目录。

1、先点击打开 source 目录，复制 URL 地址：
https://github.com/numbbbbb/the-swift-programming-language-in-chinese/tree/gh-pages/source

将 /tree/gh-pages/ 换成 /trunk/。

2、然后输入以下命令即可载入
svn co https://github.com/numbbbbb/the-swift-programming-language-in-chinese/trunk/source







