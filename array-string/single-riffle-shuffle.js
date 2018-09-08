function isSingleRiffle(half1, half2, shuffledDeck) {
  if (shuffledDeck === undefined) {
    const deck = Array.from(new Array(52), (val, i) => i + 1);
    shuffledDeck = shuffleDeck(deck);
    half1 = shuffleDeck(shuffledDeck.slice(0, 27));
    half2 = shuffleDeck(shuffledDeck.slice(27));
  }
  let i1 = 0;
  let i2 = 0;
  for (let card of shuffledDeck) {
    if (card === half1[i1]) i1++;
    else if (card === half2[i2]) i2++;
    else return false;
  }
  return true;
}

function shuffleDeck(deck) {
  let shuffledDeck = [];
  while (deck.length) {
    const randomI = Math.floor(Math.random() * deck.length);
    shuffledDeck.push(deck[randomI]);
    deck.splice(randomI, 1);
  }
  return shuffledDeck;
}

// possible, but mimics shuffled deck then shuffled halves
console.log(isSingleRiffle()); // very likely always false
// ideal case
console.log(isSingleRiffle([1, 3, 5], [2, 4, 6], [1, 2, 3, 4, 5, 6])); // true
// one off after shuffle
console.log(isSingleRiffle([1, 5, 3], [2, 4, 6], [1, 2, 3, 4, 5, 6])); // false
// all cards in one half
console.log(isSingleRiffle([1, 2, 3, 4, 5, 6], [], [1, 2, 3, 4, 5, 6])); // true
// fewer cards in both halves combined than in starting deck
console.log(isSingleRiffle([1, 2, 3], [4, 5], [1, 2, 3, 4, 5, 6])); // false
// no deck
console.log(isSingleRiffle([], [], [])); // true
