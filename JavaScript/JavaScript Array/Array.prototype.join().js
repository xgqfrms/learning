// Array.prototype.join()

// PS: join() 方法，不会改变数组！

let a = ['Wind', 'Rain', 'Fire'];

a.join(); 
// 默认为 ","
// 'Wind,Rain,Fire'

a.join(""); 
// 分隔符 === 空字符串 ""
// "WindRainFire"

a.join("-"); 
// 分隔符 "-"
// 'Wind-Rain-Fire'

console.log(a);
// ['Wind', 'Rain', 'Fire']









