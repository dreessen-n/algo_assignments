// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function sigma(val) {
    sum = 0;
    for (var i = 1; i <= val; i++) {
        sum += i;
    }
    return sum;
}

var total = sigma(5);
console.log(total);

var total1 = sigma(2.5);
console.log(total1);

var total2 = sigma(-1);
console.log(total2);

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function factorial(val) {
    total = 1;
    val = Math.trunc(val);
    console.log(val);
    if (val < 0) {
        val = 0;
    }
    for (var i = 1; i <= val; i++) {
        total *= i;
        console.log(total);
    }
    return total;
}

var result = factorial(3);
console.log(result);

var result1 = factorial(6.5);
console.log(result1);

var result2 = factorial(-1);
console.log(result2);
