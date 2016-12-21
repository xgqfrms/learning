// isPrime() 

function isPrime(number) {
    // If your browser doesn't support the method Number.isInteger of ECMAScript 6,
    // you can implement your own pretty easily
    if (typeof number !== 'number' || !Number.isInteger(number)) {
        // Alternatively you can throw an error.
        return false;
    }
    if (number < 2) {
        return false;
    }
    if (number === 2) {
        return true;
    } else if (number % 2 === 0) {
        return false;
    }
    var squareRoot = Math.sqrt(number);
    for (var i = 3; i <= squareRoot; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
