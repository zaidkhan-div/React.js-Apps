let http = require('http');
let fs = require('fs');


http.createServer(function (req, res) {
    console.log('Hello World');

    fs.appendFile('message.txt', 'Data to append', (error) => {
        if (error) throw error
        console.log('The Data to append has done');
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('File Has been appended')
        return res.end()

    })
}).listen(8080)