function countItems(arr, item) {
  let count = 0;
  function recurse(subArr) {
    for (let x of subArr) {
      if (Array.isArray(x)) return recurse(x);
      else if (x === item) count++;
    }
  }
  recurse(arr);
  return count;
}

var arr1 = ['apple', ['banana', 'strawberry', 'apple']];
var arr2 = ['apple', ['banana', 'strawberry', 'apple', ['strawberry', 'apple']]];
var arr3 = ['apple', ['banana', 'strawberry', 'apple', ['strawberry', 'apple', ['apple']]]];
var arr4 = ['peach', ['banana', 'strawberry', 'peach', ['strawberry', 'peach', ['peach']]]];

console.log(countItems(arr1, 'apple')); // 2
console.log(countItems(arr2, 'apple')); // 3
console.log(countItems(arr3, 'apple')); // 4
console.log(countItems(arr4, 'apple')); // 0
