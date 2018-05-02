// using tabulation [time O(n), space O(n)]
// function davisStaircase(n, tab = [0,1,2,4]) {
//   if (n < 4) return tab[n];
//   for (let i = 4; i <= n; i++) {
//     tab[i] = tab[i - 1] + tab[i - 2] + tab[i - 3];
//   }
//   return tab[n];
// }

// using memoization [time O(nlogn), space O(n)]
function davisStaircase(n, memo = [0, 1, 2, 4]) {
  if (n < 4) return memo[n];
  if (memo[n]) return memo[n];
  memo[n] = davisStaircase(n - 1, memo) + davisStaircase(n - 2, memo) + davisStaircase(n - 3, memo);
  return memo[n];
}

// using helper function memoization [time O(nlogn), space O(n)]
// function davisStaircase(n, memo = [0, 1, 2, 4]) {
//   if (n < 4) return memo[n];
//   function inner(n) {
//     if (memo[n]) return memo[n];
//     memo[n] = inner(n - 1) + inner(n - 2) + inner(n - 3);
//     return memo[n];
//   }
//   inner(n);
//   return memo[n];
// }
