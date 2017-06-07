# browsersync





# https://browsersync.io/

```sh
$ browser-sync start --server --files "public/*.*"

$ browser-sync start --server --files "./src/**/*.*"

$ browser-sync start --server --files "./public/**/*.*"

# http://localhost:3000/public/index.html

# 必须使用正确的路径
# 1. 在 project 根目录下，运行命令， 默认的 url 根路由，就是当前的路径
# browser-sync start --server --files "./dist/**/*.*" 
# 访问 http://localhost:3000/dist/index.html

# 2. 直接在 dist 目录下，运行命令， 默认的 url 根路由，就是当前的路径
# browser-sync start --server --files "./**/*.*" 
# 访问 http://localhost:3000/index.html

```



