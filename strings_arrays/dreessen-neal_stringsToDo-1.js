// Strings To Do assignment

// Remove Blanks
function removeBlanks(str) {
    // need blank string to concate too
    var newStr = "";
    // Iterate thru string looking for none spaces
    for (var i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}

str1 = removeBlanks(' Pl ayTha tF u nkyMu si c ');
console.log(str1);

// Get Digits

function getDigits(str) {
    // blank str to concate too
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        // Check that value is not Nan or not a Number
        if (isNaN(str[i]) != true) {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}

str2 = getDigits('abc8c0d1ngd0j0!8');
console.log(str2);


// Acronyms

function acronym(str) {
    // split the string to an array based on empty space
    wordArray = str.split(' ');
    console.log(wordArray);
    // Take first char of each index and catonate to new string
    newStr = "";
    for (var i = 0; i < wordArray.length; i++) {
        newStr = newStr + wordArray[i][0].toUpperCase();
    }
    return newStr;
}

str3 = acronym("There's no free lunch - gotta pay yer way");
console.log(str3);

str4 = acronym("Live from New York, it's Saturday Night!");
console.log(str4);

// Count Non-Spaces

function nonSpaces(str) {
    // find number of non blank spaces
    count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            count += 1;
        }
    }
    return count;
}

str5 = nonSpaces("Honey pie, you are driving me crazy");
console.log(str5);

str6 = nonSpaces("hello world!");
console.log(str6);

// Remove Shorter Strings

function rmShorterStrings(arr, val) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= val) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

str7 = rmShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4);
console.log(str7);

str8 = rmShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3);
console.log(str8);



