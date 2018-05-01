// https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem

// function fibonacci(n) {
//     if (n < 2) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// using tabulation [time O(n), space O(n)]:
// function fibonacci(n) {
//     if (n < 2) return n;
//     let tab = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         tab[i] = tab[i - 1] + tab[i - 2];
//     }
//     return results[n];
// }

// using two index array tabulation [time O(n), space O(1)]:
// function fibonacci(n) {
//     if (n < 2) return n;
//     let tab = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         let current = tab[0] + tab[1];
//         tab[0] = tab[1];
//         tab[1] = current;
//     }
//     return tab[1];
// }

// using memoization [time O(nlogn), space O(n)]:
function fibonacci(n, memo = [1, 2]) {
  if (n < 2) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}