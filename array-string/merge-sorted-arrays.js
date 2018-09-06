function myFunction(arr1, arr2) {
  let i1 = 0;
  let i2 = 0;
  let merged = [];

  while (i1 < arr1.length || i2 < arr2.length) {
    if (arr1[i1] === arr2[i2]) {
      merged.push(arr1[i1], arr2[i2]);
      i1++;
      i2++;
    } else if (arr1[i1] < arr2[i2] || i2 >= arr2.length) {
      merged.push(arr1[i1]);
      i1++;
    } else {
      merged.push(arr2[i2]);
      i2++;
    }
  }

  return merged;
}

var testArr1 = [3, 4, 6, 10, 11, 15];
var testArr2 = [1, 5, 8, 12, 14, 19];
var testArr3 = [3, 4, 6, 10, 11, 15, 25];
var testArr4 = [1, 5, 8, 12, 14, 19, 20];

console.log(myFunction(testArr1, testArr2)); // [ 1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19 ]
console.log(myFunction(testArr1, testArr4)); // [ 1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 20 ]
console.log(myFunction(testArr3, testArr2)); // [ 1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 25 ]
console.log(myFunction(testArr3, testArr4)); // [ 1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 20, 25 ]
console.log(myFunction([1, 2, 3], [1, 2, 3])); // [ 1, 1, 2, 2, 3, 3 ]
console.log(myFunction(testArr1, [100])); // [ 3, 4, 6, 10, 11, 15, 100 ]
console.log(myFunction([], testArr2)); // [ 1, 5, 8, 12, 14, 19 ]
console.log(myFunction([], [])); // []
