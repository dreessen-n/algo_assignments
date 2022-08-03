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
