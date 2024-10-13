// var http = require('http');
// var fs = require('fs');


// http.createServer(function (req, res) {
//   fs.readFile('demo.html',function(err,data){
//     if (err) {
//         res.writeHead(400, {'Content-Type': 'text/html'});
//         res.end('400 Page not Found')
//         return;
//     }
//     res.writeHead(200,{'Content-Type': 'text/html'})
//     res.end(data)
//   })
//   res.end('Hello World!');
// }).listen(8080);


// // Read files
// // Create files
// // Update files
// // Delete files
// // Rename files


var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    // console.log(req.url);
  if (req.url === '/home') {
    fs.readFile('home.html', function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
        return;
      }
    //   res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    })
  } 
  else if (req.url==='/contact'){
    fs.readFile('contact.html', function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
  else if (req.url==='/about'){
    fs.readFile('about.html', function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
   else {
    fs.readFile('pagenotfound.html', function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
        return;
      }
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
}).listen(8080);

console.log('Server running at http://localhost:8080/home');


