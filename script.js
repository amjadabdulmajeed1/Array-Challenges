//Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

//Solution 1
const arr3 = arr1.slice(0, 4).concat(arr2);
console.log(arr3);

//Solution 2
const arr4 = [...arr1, ...arr2];
x = arr3.splice(4, 1);


console.log(arr3);
console.log(arr4);