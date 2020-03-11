# Axios get & params

```js
      const params = {
        name,
        id,
        pageIndex,
        pageSize,
      };
      const url = `/api/poi/query`;
      axios
      // .get(url, params)
      .get(url, {
        params,
      })
    .then(json => {
        // do something
      })
     .catch(err => console.log(`error`, err));
```

https://stackoverflow.com/questions/40947650/axios-get-in-url-works-but-with-second-parameter-as-object-it-doesnt
