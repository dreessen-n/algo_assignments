// Setting and Swapping
var myNumber = 42;
var myName = 'Neal';
var temp = "";

temp = myName;
myName = myNumber;
myNumber = temp;

console.log('myName = ' + myName);
console.log('myNumber = ' + myNumber);

// Print -52 to 1066
function printNumbers() {
    for (var i=-52; i < 1067; i++) {
        console.log(i);
    }
}

printNumbers();

// Don't worry, Be happy
function beCheerful() {
    for (var i = 0; i < 99; i++) {
        console.log("good morning!");
    }
}

beCheerful();

// Multiples of Three - but not all
function printMult() {
    for (var i = -300; i <= 1; i += 3) {
        if (i == -3 || i == -6) {
            continue;
        } else {
            console.log(i);
        }
    }
}

printMult();

// Print int with while loop
function printInt() {
    var i = 2000;
    while (i < 5281) {
        console.log(i);
        i += 1;
    }
}

printInt();

// You say it's your birthday
function birthday(num1, num2) {
    if (num1 == 6 && num2 == 13) {
        console.log('How did you know?');
    } else if (num1 == 13 && num2 == 6) {
        console.log('How did you know?');
    } else {
        console.log('Just another day...');
    }
}

birthday(5, 10);
birthday(13, 6);
birthday(6, 13);
birthday(12, 1);

// Leap Year
function leapYear(num) {
    if (num % 4 != 0) {
        console.log("the year " + num + " is NOT a leap year");
    }
    if (num % 400 == 0 || num % 4 == 0) {
        console.log('the year ' + num + ' is a leap year');
    } else if (num % 4 == 0 && num % 100 == 0) {
        console.log('the year ' + num + ' is a NOT leap year');
    } else if (num % 4 == 0) {
        console.log('the year ' + num + ' is a leap year');
    }
}

leapYear(2020);
leapYear(2000);
leapYear(1999);
leapYear(2024);
leapYear(2028);
leapYear(1900);

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

function printCount() {
    var count = 0;
    for (var i = 512; i <= 4096; i++) {
        if ( i % 5 == 0) {
            console.log(i);
            count += 1;
        }
    }
    console.log('There are ' + i + ' multiples of 5');
}

printCount();

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

function mult6() {
    var i = 0;
    while (i < 60001) {
        if (i % 6 == 0) {
            console.log(i);
        }
        i++;
    }
}

mult6();

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

function dojoWay() {
    for (var i = 1; i < 101;  i++) {
        if ((i % 5 == 0) && (i % 10 == 0)) {
            console.log('Coding Dojo');
        } else if (i % 5 == 0) {
            console.log('Coding');
        } else {
        console.log(i);
        }
    }
}

dojoWay();

// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.

function printParameter(val) {
    console.log(val);
}

printParameter('hello');
printParameter(6);

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

function suckerHuge() {
    sum = 0;
    var i = -300000;
    while (i < 300001) {
       if (i % 2 == 0) {
           i += 1;
       } else {
           sum += i;
           i += 1;
       }
    }
    console.log(sum);
}

suckerHuge();

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

function countdown4() {
    var i = 2016;
    while (i != 0) {
        console.log(i);
        i -= 4;
    }
}

countdown4();

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).


