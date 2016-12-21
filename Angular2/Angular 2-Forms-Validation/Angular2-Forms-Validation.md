# Angular2 Forms Validation  

https://angular.io/docs/ts/latest/cookbook/form-validation.html  


## template variable (模板变量 template variable)  

回到组件模板的顶部，我们在<form>元素中设置#heroForm模板变量：

```codes
<form #heroForm="ngForm"  *ngIf="active"  (ngSubmit)="onSubmit()">

``` 




## video  

https://www.youtube.com/watch?v=KGfZPP36QUI  

#title="ngModule"

Q: what's this mean ?
```reference
https://angular.io/docs/ts/latest/guide/cheatsheet.html  
<video #movieplayer ...>
  <button (click)="movieplayer.play()">
</video> 
``` 
A: Creates a local variable `movieplayer` that provides access to the video element instance in data-binding and event-binding expressions in the current template.﻿









