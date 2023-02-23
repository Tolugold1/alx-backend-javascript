const http = require('http');

const port = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end('Hello Holberton School!');
});

app.listen(port);
module.exports = app;
