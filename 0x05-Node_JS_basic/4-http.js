const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;


const app = http.createServer((req,res) =>{
    res.statusCode = 200;
    req.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
});

app.listen(port,hostname, ()=>{
    // console .log desired message to show port is working
});

module.exports = app;