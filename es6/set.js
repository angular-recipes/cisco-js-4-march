let set = new Set();

set.add('a');
console.log(set);

set.add('b');
console.log(set);

set.add('c');
console.log(set);

set.add('a');
console.log(set);
var x = {a: 1}
set.add(x);
set.add(x);
console.log(set);

console.log(set.size);
console.log(set.has(x));
