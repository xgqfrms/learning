# Axios & Fetch API


## Axios & catch 500 error response data

```js

const log = console.log;

  updateData(options = {}, flag = false){
    let url = `/opapi/appDownloadGuide/update`;
    let message = '更新成功!';
    let errorMessage = '更新失败!';
    if (flag) {
      message = '添加成功!';
      errorMessage = '添加失败!';
      url = `/opapi/appDownloadGuide/add`;
    }
    axios
    .post(url, options)
    .then(res => {
      // ❓🤔️500 , 在这里拦不住呀？
      log(`res`, res, res.status);
      return res.data;
    })
    .then(json => {
      const {
        code,
        success,
        data,
        errorCode,
        errorHint,
      } = json;
      if(code === 200) {
        this.$message({
          type: 'success',
          message,
        });
        this.init();
      } else{
        this.$message({
          type: 'error',
          message: `${errorMessage}: ${errorHint ? errorHint : ""}`,
        });
      }
    })
    .catch(err => {
      // 👌在这里拦截 error data!
      log(`error.response`, err.response);
      const {
        data,
        status,
        statusText,
      } = err.response;
      this.$message({
        type: "error",
        message: `${statusText}-${status}: ${data || ""}`,
        // message: "不能重复创建",
      });
      console.error(`500 err`, err);
    });
  },

```

https://stackoverflow.com/questions/38798451/how-to-catch-and-handle-error-response-422-with-redux-axios

