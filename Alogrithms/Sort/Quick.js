var a = [8, 4, 6, 2, 1, 9, 5, 5, 4, 3, 4, 3];

function qsort(arr) {
    var stack = [arr];
    var sorted = [];
    while (stack.length) {
        var temp = stack.pop(),
            tl = temp.length;
        if (tl == 1) {
            sorted.push(temp[0]);
            continue;
        }
        var pivot = temp[0];
        var left = [],
            right = [];
        for (var i = 1; i < tl; i++) {
            if (temp[i] < pivot) {
                left.push(temp[i]);
            } else {
                right.push(temp[i]);
            }
        }
        left.push(pivot);
        if (right.length)
            stack.push(right);
        if (left.length)
            stack.push(left);
    }
    console.log("sorted = " + sorted);
    console.log("typeof = " + typeof sorted);
    // return sorted[0] + "," + sorted[1] + "," + sorted[2] + "," + sorted[3] + "," + sorted[4] + "," + sorted[5] + "," + sorted[6] + "," + sorted[7] + "," + sorted[8];
}
qsort(a);

//console.log("sorted = " + qsort(a));
