function findShortest(vectors) {
  let shortest = Infinity;
  let shortestVector;
  for (let vector of vectors) {
    if (calculateLength(vector) < shortest) {
      shortest = calculateLength(vector);
      shortestVector = vector;
    }
  }
  return shortestVector;
}

function calculateLength(vector) {
  let sum = 0;
  for (let num of vector) sum += num ** 2;
  return Math.sqrt(sum);
}

var vectors = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];
console.log(findShortest(vectors)); // [1, 1, 1]
