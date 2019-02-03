let items = new Set(['one', 'two', 'three']);
console.log(items);
console.log(items.size);
items.add('four');
items.delete('two');
console.log(items);
console.log(items.size);
console.log(items.has('four'));
console.log(items.has('five'));

items.forEach(item => console.log(item));
items.clear();
items.add('one');
console.log(items);

items.add('more');
items.add('time');

for (let item of items) { console.log(item); }

let tags = ['php', 'javascript', 'vue', 'javascript'];
let set = new Set(tags);
console.log(set);

let newSet = new Set([...set].filter(tag => tag.length === 3));
console.log(newSet);

var mentionedUsers = ['johndoe', 'janedoe', 'janedoe'];
console.log(new Set(mentionedUsers));
