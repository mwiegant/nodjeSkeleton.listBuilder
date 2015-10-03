// Express JS routing file for '/'

(function(module) {
    var express = require('express');
    var app = express();
    var fs = require('fs');
    var router = express.Router();

    // Utility function for loading html views into the browser
    function renderPage(filename, res) {
        var readFile = __dirname + '/../views/' + filename + ".html";

        fs.readFile(readFile, 'utf8', function(err, data) {
            if(err) {
                res.writeHead(404);
                res.write("Failed to render %s.", filename);
            }
            else {
                res.writeHead(200);
                res.write(data.toString());
            }
            res.end();
        });

    }

    //todo find out where else in this project codebase there is code that could be handing requests to /



    /* GET home page. */
    router.get( '/' , function(req, res) {
        renderPage('index', res);
    });

    router.get( "/view", function(req,res) {
        renderPage('viewdata', res);
    });

    router.get( "/edit", function(req,res) {
        renderPage('editdata', res);
    });

    router.get('/profile', function(req, res) {
        renderPage('profile', res);
    });

    router.get('/viewdocs', function(req, res) {
        renderPage('viewdocs', res);
    })

    /* GET all other requests */
    router.get('*', function(req, res) {
        renderPage('error', res);
    });

    /* POST to edit page */
    router.post('/edit', function(req, res) {
        var data = JSON.parse(req.body);

        console.log("breakpoint");
    });




    module.exports = router;
})(module);


