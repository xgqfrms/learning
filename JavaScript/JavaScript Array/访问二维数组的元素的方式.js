// 二维数组
// 访问二维数组的元素的方式
// learning\Google\YouTube API\000-xyz

let tda = [["value01",{"key11":"value11", "key12":"value12"}],["value02",{"key21":"value21","key22":"value22"}]];

tda;
// [Array[2], Array[2]]

tda[0];
// ["value01", Object]

tda[0][0];
// "value01"

tda[0][1].key11;
// "value11"

tda[0][1].key12;
// "value12"
