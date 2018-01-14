# localSrorage

## uids

> left & right

### save
1. get parentBox
2. get leftModules & rightModules
3. write to session & localStorage

4. save button / close window / DOM unload ??? save time ???

### init

1. read localStorage & fetch session
> promise & css loading...
2. left & right init modules
3. listen change status




https://learning.xgqfrms.xyz/webpack-next/000-xyz/no-jquery-modal/modal/libs/test.html

https://cdn.xgqfrms.xyz/json/news/560956639429
https://cdn.xgqfrms.xyz/json/news/560956639429.json


https://github.com/gildata/RAIO/issues/280#issuecomment-355833553



```js


fetch(`https://cdn.xgqfrms.xyz/json/badges.json`)
.then((res) => res.json())
.then((data) => console.log(data));


fetch(`https://cdn.xgqfrms.xyz/json/news/560956639429`)
.then((res) => res.json())
.then((data) => {
    console.log(data.user);
    console.log(data.courses);
    console.log(data.badges);
});

fetch(`https://cdn.xgqfrms.xyz/json/news/560956639429`)
.then((res) => res.json())
.then((data) => console.log(data));


fetch(`https://cdn.xgqfrms.xyz/json/news/560956639429.json`)
.then((res) => res.json())
.then((data) => console.log(data));

```






https://gist.github.com/xgqfrms-GitHub/64972e969d7491a7f845b9d69a9ba743