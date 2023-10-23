function sayHello(name){
    console.log(`hello there ${name}`)
}

const sayBye = (name) => {
    console.log(`bye ${name}`)
}

module.exports = { sayBye, sayHello }