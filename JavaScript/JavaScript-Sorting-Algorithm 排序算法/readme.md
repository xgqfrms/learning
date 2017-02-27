# JS-Sorting-Algorithm  



https://github.com/xgqfrms-GitHub/computer-science-in-javascript

https://www.nczonline.net/blog/2009/09/01/computer-science-in-javascript-binary-search/




https://www.w3ctech.com/topic/1943


插入排序、希尔排序、选择排序、冒泡排序、归并排序、快速排序、堆排序、基数排序



关于时间复杂度：

平方阶 (O(n2)) 排序 各类简单排序:直接插入、直接选择和冒泡排序。
线性对数阶 (O(nlog2n)) 排序 快速排序、堆排序和归并排序；
O(n1+§)) 排序，§ 是介于 0 和 1 之间的常数。 希尔排序
线性阶 (O(n)) 排序 基数排序，此外还有桶、箱排序。

关于稳定性：

稳定的排序算法：冒泡排序、插入排序、归并排序和基数排序。

不是稳定的排序算法：选择排序、快速排序、希尔排序、堆排序。

名词解释：

n：数据规模

k：“桶”的个数

In-place：占用常数内存，不占用额外内存

Out-place：占用额外内存

稳定性：排序后2个相等键值的顺序和排序之前它们的顺序相同




https://wowphp.com/post/komxdx8qe862.html


http://www.jcodecraeer.com/a/chengxusheji/shejimoshi/2015/0527/2941.html

https://github.com/hustcc/JS-Sorting-Algorithm

https://sort.hust.cc/

http://www.cricode.com/3212.html



http://blog.csdn.net/v_july_v







https://en.wikipedia.org/wiki/Sorting_algorithm



3   Popular sorting algorithms
    3.1 Simple sorts
        3.1.1   Insertion sort
        3.1.2   Selection sort
    3.2 Efficient sorts
        3.2.1   Merge sort
        3.2.2   Heapsort
        3.2.3   Quicksort
    3.3 Bubble sort and variants
        3.3.1   Bubble sort
        3.3.2   Shellsort
        3.3.3   Comb sort
    3.4 Distribution sort
        3.4.1   Counting sort
        3.4.2   Bucket sort
        3.4.3   Radix sort






https://h3manth.com/javascript-sorting/



```js
let quicksort = function(arr) {
    if(arr.length <= 1) return arr;
    let pivot = Math.floor((arr.length -1)/2);
    let val = arr[pivot], less = [], more = [];
    arr.splice(pivot, 1);
    arr.forEach(function(e,i,a){
        e < val ? less.push(e) : more.push(e);
    });
    return (quicksort(less)).concat([val],quicksort(more))
}

let arr = [5, 3, 7, 4, 1, 9, 8, 6, 2];
quicksort(arr);

``` 















## 快速排序/分区交换排序

https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/


https://en.wikipedia.org/wiki/Quicksort

https://zh.wikipedia.org/wiki/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F




```js
Array.prototype.quick_sort = function() {
    var len = this.length;
    if (len <= 1)
        return this.slice(0);
    var left = [];
    var right = [];
    var mid = [this[0]];
    for (var i = 1; i < len; i++)
        if (this[i] < mid[0])
            left.push(this[i]);
        else
            right.push(this[i]);
    return left.quick_sort().concat(mid.concat(right.quick_sort()));
};

var arr = [5, 3, 7, 4, 1, 9, 8, 6, 2];
arr = arr.quick_sort();
for (i = 0; i < arr.length; i++)
    document.body.innerHTML += arr[i] + " ";
document.body.innerHTML += "<br>";
``` 



## Bubble Sort  

https://h3manth.com/javascript-sorting/


```js

let compare = (n1, n2) => n1 - n2;

let bubbleSort = (arr, cmp = compare) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (cmp(arr[j], arr[j - 1]) < 0) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
        }
    }
    return arr;
};


let arr = [5, 3, 7, 4, 1, 9, 8, 6, 2];
bubbleSort(arr);

``` 




## Insertion Sort  

https://h3manth.com/javascript-sorting/


```js

let insertionSort = (arr) => {
    for (let i = 0; i < a.length; i++) {
        let toCmp = arr[i];
        for (let j = i; j > 0 && toCmp < a[j - 1]; j--)
            arr[j] = a[j - 1];
        arr[j] = toCmp;
    }
    return arr;
}

let arr = [5, 3, 7, 4, 1, 9, 8, 6, 2];
insertionSort(arr);

``` 



## Selection Sort  

https://h3manth.com/javascript-sorting/


```js

var selectionSort = function (arr) {
    let i,m,j;
    for (i = -1; ++i < a.length;) {
        for (m = j = i; ++j < a.length;) {
            if (arr[m] > arr[j]) m = j;
        }
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
}

let arr = [5, 3, 7, 4, 1, 9, 8, 6, 2];
selectionSort(arr);

``` 






## Merge Sort  

https://h3manth.com/javascript-sorting/


```js

let mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    let middle = parseInt(arr.length / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

let merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
        left[0] <= right[0] ?
        result.push(left.shift()) :
        result.push(right.shift());
    }
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
    return result;
}

let arr = [5, 3, 7, 4, 1, 9, 8, 6, 2];
insertionSort(arr);

``` 













https://github.com/git-tips/tips


https://github.com/hemanth/functional-programming-jargon


https://github.com/benoitvallon/computer-science-in-javascript/tree/master/sorting-algorithms-in-javascript


https://github.com/benoitvallon/computer-science-in-javascript/tree/master/data-structures-in-javascript






https://github.com/benoitvallon/react-native-nw-react-calculator



Mobile, desktop and website Apps with the same code


react-native-nw-react-calculator



http://blog.benoitvallon.com/react-native-nw-react-calculator/


https://github.com/benoitvallon/react-native-nw-react-calculator


https://keybase.io/hemanth

https://h3manth.com/new/

https://jsfeatures.in/



http://khan4019.github.io/front-end-Interview-Questions/sort.html




https://nmotw.in/



