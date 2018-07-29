var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log('client request URL: ', req.url);

    if(req.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function(err, contents) {
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.write(contents);
            res.end();
        });
    } else if (req.url === '/images/car1.jpg') {
        fs.readFile('./images/car1.jpg', function(err, contents) {
            res.writeHead(200, {'Content-type' : 'image/jpg'});
            res.write(contents);
            res.end();
        })
    } else if (req.url === '/images/car2.jpg') {
        fs.readFile('./images/car2.jpg', function(err, contents) {
            res.writeHead(200, {'Content-type' : 'image/jpg'});
            res.write(contents);
            res.end();
        })
    } else if (req.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function(err, contents) {
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.write(contents);
            res.end();
        });
    } else if (req.url === '/images/cat1.jpg') {
        fs.readFile('./images/cat1.jpg', function(err, contents) {
            res.writeHead(200, {'Content-type' : 'image/jpg'});
            res.write(contents);
            res.end();
        })
    } else if (req.url === '/images/cat2.jpg') {
        fs.readFile('./images/cat2.jpg', function(err, contents) {
            res.writeHead(200, {'Content-type' : 'image/jpg'});
            res.write(contents);
            res.end();
        })
    } else if (req.url === '/cars/new') {
        fs.readFile('views/new.html', 'utf8', function(err, contents) {
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.write(contents);
            res.end();
        });
    } else if (req.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
         res.writeHead(200, {'Content-type': 'text/css'});
         res.write(contents);
         res.end();
        })
    } else {
        res.writeHead(404);
        res.end("File Not Found");
    }
});

server.listen(3000);

console.log("Running on port 3000");