// const { response } = require('express');
const express = require('express');
const app = express();
//
//
// Specifies where to locate static web files
app.use(express.static('public'));
//
//
// HTML of "/" file
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Welcome!</title>
</head>
<body>
    <h1> Welcome!</h1>
    <a href="hello-world.html">See Winnie the Pooh!</a>
</body>
</html>`;
//
//
// Node get request/response  wrap statement
app.get('/', (request, response) => {
    response.status(200);
    response.send(html);
});
//
//
//
// Listen for request on port 8080 
app.listen(8080);