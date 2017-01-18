
// javascript遍历二维数组


function func() {
    let arr = [];
    arr = [
        [1, 2],
        [1, 2, 3],
        [1, 2, 3, 4],
        [1, 2, 3, 4, 5]
    ];
    let i, j;
    for (i = 0; i < arr.length; i++) {
        let arr_l = [];
        arr_1 = arr[i];
        for (j = 0; j < arr_1.length; j++) {
            // document.write(arr_1[j]);
            console.log(arr_1[j]);
        }
        // document.write("</br>")
    }
}
