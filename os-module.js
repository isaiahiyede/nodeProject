const os = require('os')
const user = os.userInfo()

console.log(user)

// to see uptime of system
console.log(`the system has been up for ${os.uptime()/(3600*24)} days`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOs);
