const http = require('http');

const server = http.createServer(
    (req, res) => {
        if(req.url == '/'){
            res.end(`
                <h1>Welcome to our homepage</h1>
                <ul>
                    <li><a href='/about'>About Us</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>
            `)
        }
        if(req.url == '/about'){
            res.end(`
                <h1>About Us</h1>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>
            `)
        }
        if(req.url == "/contact"){
            res.end(`
                <h1>Contact</h1>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About Us</a></li>
                </ul>
            `)
        }
        res.end(`
            <h1>Oops...Page not found</h1>
            <ul>
                <li><a href='/'>Home</a></li>
            </ul>
        `)
    }
)

server.listen(8008)