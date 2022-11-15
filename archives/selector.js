var canvas = new fabric.Canvas('cvs');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

canvas.on('mouse:down', function(options) {
    if (options.target) {
      $('#res').text(options.target.type);
    }
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});
 
