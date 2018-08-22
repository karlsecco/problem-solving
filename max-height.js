function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// create tree
const n1 = new Node(100);
const n2 = new Node(50);
const n3 = new Node(150);

n1.left = n2;
n1.right = n3;

const n4 = new Node(25);
const n5 = new Node(75);

n2.left = n4;
n2.right = n5;

const n6 = new Node(10);

n4.left = n6;

function findMaxHeight(node) {
  if (!node) return 0;
  let left = node.left ? findMaxHeight(node.left) : 0;
  let right = node.right ? findMaxHeight(node.right) : 0;
  return 1 + Math.max(left, right);
}

console.log(findMaxHeight(n1)); // 4

const n7 = new Node(60);
const n8 = new Node(55);
const n9 = new Node(65);
const n10 = new Node(70);

n5.left = n7;
n7.left = n8;
n7.right = n9;
n9.right = n10;

console.log(findMaxHeight(n1)); // 6
console.log(findMaxHeight(null)); // 0
