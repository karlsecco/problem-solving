// https://www.hackerrank.com/challenges/ctci-coin-change/problem

function coinChange(arr, n) {
  let tbl = Array(n + 1).fill(0);
  tbl[0] = 1;
  for (let aI = 0; aI < arr.length; aI++) {
    for (let tI = arr[aI]; tI < tbl.length; tI++) {
      tbl[tI] += tbl[tI - arr[aI]];
    }
  }
  return tbl[n];
}