const path = require('path');
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync(path.join('content', 'first.txt'), 'utf8');
const second = readFileSync(path.resolve(__dirname,'content','second.txt'),'utf8');

console.log(first);
console.log(second);

writeFileSync(
    './content/new_file.txt',
    `Hello there: ${first}\n${second}`,
    { flag: 'a' }
)