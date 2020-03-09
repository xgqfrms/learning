# Axios catch error

```js

putUpdateGeoJSON(GeoJSON = {}, templateId) {
  const data = {
    "svg": "",
    "seatMap": JSON.stringify(GeoJSON),
  };
  const options = data;
  const url = `/opapi/v2/seatMap/template/${templateId}`;
  axios
  .put(url, options)
  .then(json => {
    const {
      status,
      data,
    } = json;
    if (status === 200) {
      this.$message({
        type: "sccuess",
        message: "保存现场图成功!",
      });
      this.$emit(`refresh-import-template`);
    } else {
      this.$message({
        type: "error",
        message: "保存现场图失败!",
      });
    }
  })
  .catch(err => {
    this.$message({
      type: "error",
      message: "保存现场图失败!",
    });
    console.error(err.response ? err.response : err);
  });
},


```
