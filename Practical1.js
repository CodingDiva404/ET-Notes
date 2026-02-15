// Array: Program for searching numbers in Array.

let number = [10 , 20 , 30 , 40 , 50 , 60];

function arrayInList(array , target){
    return array.includes(target) ? `Number ${target} found. ` : `Number ${target} not found. `;
}

// console.log(arrayInList(number , 40));
// console.log(arrayInList(number , 45));

// Sets: Program to remove duplicate numbers from Array. 

function removeDuplicates(array){
    return [...new Set(array)]
}

let num = [1 , 2 , 3 ,3 , 4 , 5 , 5 , 66];
// console.log(removeDuplicates(num)); 

function countCharacter(str) {
    let charMap = new Map();

    for (let char of str) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    return charMap;
}

let msg = "Hello Shraddha";
// console.log(countCharacter(msg))

// Assigment Operator

let x = 10;
x += 5;
x -= 5;
x *= 5;
x /= 2;
console.log(x);