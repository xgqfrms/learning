var fib, i, number, solutions;
fib = function(x) {
    if (x < 2) {
        return x;
    } else {
        return fib(x - 1) + fib(x - 2);
    }
};
solutions = [];
for (number = i = 0; i <= 10; number = ++i) {
    solutions.push(fib(number));
}
console.log(solutions);
