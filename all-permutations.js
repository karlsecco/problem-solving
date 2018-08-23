function findAllPermutations(str, curr = '', result = []) {
  for (let i = 0; i < str.length; i++) {
    if (str.length === 1) result.push(curr.concat(str));
    findAllPermutations(str.slice(0, i).concat(str.slice(i + 1)), curr.concat(str[i]), result);
  }
  return result;
}

console.log(findAllPermutations('')); // []
console.log(findAllPermutations('I')); // [ 'I' ]
console.log(findAllPermutations('it')); // [ 'it', 'ti' ]
console.log(findAllPermutations('cat')); // [ 'cat', 'cta', 'act', 'atc', 'tca', 'tac' ]
console.log(findAllPermutations('Karl'));

/*

[ 'Karl',
  'Kalr',
  'Kral',
  'Krla',
  'Klar',
  'Klra',
  'aKrl',
  'aKlr',
  'arKl',
  'arlK',
  'alKr',
  'alrK',
  'rKal',
  'rKla',
  'raKl',
  'ralK',
  'rlKa',
  'rlaK',
  'lKar',
  'lKra',
  'laKr',
  'larK',
  'lrKa',
  'lraK' ]


  */
