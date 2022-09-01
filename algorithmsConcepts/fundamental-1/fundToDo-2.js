// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countdown(num) {
    newArr = [];
    for (var i = num; i > 0; i--) {
        console.log(i);
        newArr.push(i);
    }
    return newArr;
}

newArrLen = countdown(4);
console.log('newArr length = ' + newArr.length);

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

function printReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}

valReturned = printReturn([5,6]);
console.log(valReturned);

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

// Can't get the boolean to work!!

function firstPlusLen(arr) {
    if (isNaN(arr[0]) === false) {
        console.log(arr[0] + arr.length);
    } else if (arr[0] === false || arr[0] === true) {
            console.log('First value is a boolean');
        } else {
            console.log('First value is a string');
    }
}

firstPlusLen(['nan',2,3,4]);
firstPlusLen([1,2,3,4]);
firstPlusLen([true,2,3,4]);


// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function greaterThan2nd(arr) {
    count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            count += 1;
            console.log(arr[i]);
        }
    }
    return count;
}

total = greaterThan2nd([1,3,5,7,9,13]);
console.log(total);


// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

console.log('Values Greater than Second, Generalized');

function vGT2nd(arr) {
    newArr = [];
    if (arr.length > 1) {
        for (var i=0; i<arr.length; i++) {
            if (arr[i] > arr[1]) {
                newArr.push(arr[i]);
            }
        }
    } else {
        console.log('Array is too short');
    }
    return newArr;
}

total2 = vGT2nd([1,3,5,7,9,13]);
console.log(total2);
total3 = vGT2nd([1]);
console.log(total3);

// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.



// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".




// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.




// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.



// (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.
