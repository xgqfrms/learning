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

var c = [33, 103, 3, 726, 200, 984, 198, 764, 9];

function bubbleSort(x) {
    var numElements = x.length;
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

