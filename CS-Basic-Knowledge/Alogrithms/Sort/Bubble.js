var a = [33, 103, 3, 726, 200, 984, 198, 764, 9];

function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort(a);
console.log(a);



var b = [33, 103, 3, 726, 200, 984, 198, 764, 9];

function bubbleSort(items) {
    var length = items.length;
    for (var i = 0; i < length; i++) {
    //Number of passes
        for (var j = 0; j < (length - i - 1); j++) { 
        //Notice that j < (length - i)
        //Compare the adjacent positions
            if (items[j] > items[j + 1]) {
                //Swap the numbers
                var tmp = items[j];
                //Temporary variable to hold the current number
                items[j] = items[j + 1];
                //Replace current number with adjacent number
                items[j + 1] = tmp;
                //Replace adjacent number with current number
            }
        }
    }
}
bubbleSort(b);
console.log(b);

// http://stackoverflow.com/questions/7502489/bubble-sort-algorithm-javascript
// error ???
// https://repl.it/Ev0O/11 
// https://books.google.com.hk/books?id=1ywEAwAAQBAJ&pg=PA69&lpg=PA69&dq=this.dataStore.length&source=bl&ots=Toyj440Z_H&sig=2Q4u1iRj-kwD1oosM5foXzOtYxA&hl=zh-CN&sa=X&ved=0ahUKEwiz8bKItYfRAhWBnpQKHSWYBt4Q6AEIGTAA#v=onepage&q&f=false  
// Data Structures and Algorithms with JavaScript (p69 Queues)
// https://www.packtpub.com/mapt/book/Web%20Development/9781785285493  
// https://segmentfault.com/a/1190000005038110  (数据结构JavaScript描述-队列篇 )

var c = [33, 103, 3, 726, 200, 984, 198, 764, 9];

function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer-1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner+1]) {
                swap(this.dataStore, inner, inner+1); 
            }
        }
        console.log(this.toString()); 
    }
}

bubbleSort(c);
console.log(c);



var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
 
function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
 
bubbleSort(a);
console.log(a);

