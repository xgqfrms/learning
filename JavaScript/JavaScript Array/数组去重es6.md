# 数组去重es6



原始数组去重法

    var arr = [1, 2, 3, '1', '2', 1, 2, undefined, null, null, undefined]
    function unique(arr) {
        var ret = [];
        for (var i = 0, l = arr.length; i < l; i++) {
            if (ret.indexOf(arr[i]) === -1) {
                ret.push(arr[i])
            }
        }
        return ret
    }
    var newArr = unique(arr)
    console.log(newArr)

Set对象数组去重

    var arr = [1,2,1,2,3,4,5,'1','2']
    console.log(Array.from(new Set(arr)))



es6的Set对象规定 允许你存储任意类型的唯一值(不能重复), 所以他会把重复值去掉
    但是返回的结果会是一个对象类型所以需要Array.form()方法
Array.from()方法可将一个类数组或可迭代(遍历)对象创建成一个新的数组实例
    迭代 : 每一次对过程的重复称为一次“迭代”，而每一次迭代得到的结果会作为下一次迭代的初始值 







JavaScript数组方法


Array.every()
every() 方法测试数组的所有元素是否都通过了指定函数的测试 every(callback)
如果全部通过测试 结果返回true 有一个没通过的就返回false
callback的3个参数 分别为元素值,元素的索引,调用这个函数的数组
every()方法只做判断 不做其他的任何事 ```js //检测数组中的所有元素是否都大于10 function isBigEnough(value, index, array) { return value > 10 }


[10, 11, 12, 13, 14].every(isBigEnough) //false [11, 12, 13, 14, 15].every(isBigEnough) //true


+ Array.filter()
    * filter()方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组 filter(callback)
    * callback的3个参数 分别为元素值,元素的索引,调用这个函数的数组
    * 与every()不同的是 every()仅仅只做判断 而filter()会过滤掉不符合条件的元素,并将符合条件的元素组成一个新数组
```js
    function isBigEnough(value) {
      return value > 10
    }

    [10, 11, 12, 13, 14].filter(isBigEnough)   //[11, 12, 13, 14]
    [11, 12, 13, 14, 15].filter(isBigEnough)   //[11, 12, 13, 14, 15]





Array.from() –>该方法为es6方法
from()方法可将一个类数组或可迭代(遍历)对象转换成一个数组
它有三个参数
第一个参数是要转换为真实数组的元素
第二个参数是一个函数 ,如果指定了这个参数,那么第一个参数会先经过这个函数的处理后在返回
第三参数是执行函数时 this 的值 . 不会用╮(╯▽╰)╭ js var arr = [1,2,3,4,5] function func(n){ return n+n } var result = Array.from(arr,func) console.log(result) //[2,4,6,8,10]





