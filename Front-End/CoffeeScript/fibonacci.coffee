fib = (x) ->
    if x < 2
        x
    else
        fib(x-1) + fib(x-2)
solutions = []
for number in [0..10]
    solutions.push ( fib number )
console.log solutions

# https://en.wikipedia.org/wiki/Fibonacci
