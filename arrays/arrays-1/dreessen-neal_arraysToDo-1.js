// ArraysToDo 1 assignment core

// Push front 
arr = [1,2,3,4];

function pushFront(arr, num) {
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = num;
    return arr
}

pushFront(arr, 5);
console.log(arr);

// Pop Front
arr2 = [0,5,10,15];
arr3 = [4,5,7,9];

function popFront(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr;
}

popFront(arr2);
console.log(arr2);
popFront(arr3);
console.log(arr3);

// Insert At
function insertAt(arr, x, val) {
    for (var i = arr.length; i > x; i--) { 
        arr[i] = arr[i-1];
    }
    arr[x] = val;
    return arr;
}

var arr4 = insertAt([1000,200,5],2,311);
console.log(arr4);

var arr5 = insertAt([9,33,7],1,42);
console.log(arr5);

// BONUS: Remove At
function removeAt(arr, val) {
    temp = arr[val];
    for (var i = val; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr;
}

var arr6 = removeAt([1000,3,204,77],1);
console.log(arr6);

var arr7 = removeAt([8,20,55,44,98],3);
console.log(arr7);

// Swap Pairs

function swapPairs(arr) {
    if (arr.length % 2 == 0) {
        for (var i = 0; i < arr.length; i+=2) {
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    } else {
        for (var i = 0; i < arr.length-1; i+=2) {
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }

    }
    return arr;
}

arr8 = swapPairs([1,2,3,4]);
console.log(arr8);

arr9 = swapPairs(['Brendan', true, 42]);
console.log(arr9);

