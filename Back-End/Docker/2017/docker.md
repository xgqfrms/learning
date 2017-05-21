# Docker 教程

http://campus.codeschool.com/courses/try-docker/level/1/section/1/containers--images

https://www.runoob.com/docker/docker-tutorial.html

https://www.docker.com/
https://www.docker.com/community-edition
https://store.docker.com/editions/community/docker-ce-desktop-windows
https://download.docker.com/win/stable/InstallDocker.msi
https://store.docker.com/editions/community/docker-ce-desktop-windows/plans/docker-ce-desktop-windows-tier?tab=instructions


https://docs.docker.com/docker-for-windows/
https://docs.docker.com/docker-for-windows/#where-to-go-next

> https://cloud.docker.com/app/xgqfrms


```sh
# 开始运行一个容器 `docker container run` images-name : images-version-number
$ docker container run httpd:2.4

# 映射端口  http://localhost:80/index.html
$ docker container run -p 80:80 httpd:2.4

# -p 表示“发布端口”。
# 第一个数字是我们要打开的主机上的端口，第二个数字是我们要映射到的容器中的端口。
$ docker container run -p 9999:80 httpd:2.4.

# 访问容器 http://localhost:9999/index.html

# 在我们可以运行命令之前，我们需要知道容器的ID。
# 每个容器都获得唯一的ID，Docker也为它们分配一个随机的名称。
$ docker container ls

# 如何进入正在运行的容器并环顾四周？
# 当你需要在一个指定的容器运行一个命令时，可以使用容器ID(container ID ) 或 容器名称 (container name )。
$ docker container exec
$ docker container exec container_name  du -mh

# du ???
# -mh ???


# 将一个 Shell 附加到一个容器
# 可以将-i 和 -t标志传递给exec命令，以保持交互式shell打开，并且可以在容器ID后指定要附加的shell。
# Bash shell
# 容器名称 === elegant_noether
$ docker container exec -it elegant_noether /bin/bash

# 尝试在容器内键入与exec一样的命令。
# root@a8c267869b0b:/usr/local/apache2#
$  du -mh

# 在容器中安装东西  programs or packages

$ docker container exec -it elegant_noether /bin/bash
$ apt-get install -y fortunes
$ /usr/games/fortune

# 更新容器中的ENV
# 在fortune 命令之前输入 /usr/games/这是一种令人讨厌的事情，所以让我们更新容器中的PATH环境变量，这样我们就不用再输入
$ docker container exec -it elegant_noether /bin/bash
$ PATH=$PATH:/usr/games/
$ export PATH
$ fortune




```





http://courseware.codeschool.com.s3.amazonaws.com/git_real_slides.pdf

