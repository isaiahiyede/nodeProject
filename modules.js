// Modules = encasulated code (only share minimum code)
// CommonJs = every file is a module by default
const names = require('./names.js')
const funcs = require('./funcs.js')

console.log(names);
console.log(funcs)

funcs.sayHello(names.john)
funcs.sayHello(names.peter)

funcs.sayBye(names.john)
funcs.sayBye(names.peter)