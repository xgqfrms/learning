# Angular Pipes  


https://angular.io/docs/ts/latest/guide/pipes.html  

https://angular.io/docs/ts/latest/api/common/index/CurrencyPipe-pipe.html  
https://angular.io/docs/ts/latest/guide/pipes.html#!#no-filter-pipe  

number_expression | currency[:currencyCode[:symbolDisplay[:digitInfo]]]  


## Currency code  
https://en.wikipedia.org/wiki/ISO_4217  


CNY

{{a | currency:'CNY':true:'4.2-2'}}
{{b | currency:'USD':true:'4.2-2'}}
{{c | currency:'ERU':true:'4.2-2'}}


## Internationalization API  
https://angular.io/docs/ts/latest/api/common/index/CurrencyPipe-pipe.html  

https://angular.io/docs/ts/latest/guide/browser-support.html  
https://angular.io/docs/ts/latest/api/common/index/DecimalPipe-pipe.html  






http://stackoverflow.com/questions/34939612/in-angular-2-how-to-display-a-number-as-two-decimal-rounded-currency  
http://voidcanvas.com/angular-2-pipes-filters/  


https://blog.ngconsultant.io/custom-input-formatting-with-simple-directives-for-angular-2-ec792082976#.h2s5jhq2s  







Additional Pipes to Use

lowercase 
date    Formats dates how you like them.
number    Formats numbers.
decimal    Formats decimals.
replace    Creates a new string, replacing specified characters.
slice    Creates a new list or string containing a subset of the elements.
json    Transforms any input to a JSON-formatted string



You can also create custom pipes!  











