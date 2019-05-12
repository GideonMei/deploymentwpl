//install express server
const express = require('express');
const path = require('path');

const app = express();;

app.use(express.static(__dirname + '/deploymentpwl-app'));

app.all('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/deploymentpwl-app/index.html'));
});

app.listen(process.env.PORT || 8080);