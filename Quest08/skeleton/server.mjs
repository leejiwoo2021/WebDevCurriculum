import http from 'http';
import parser from './utils/parser.js';
import foo from './router/foo.js';
import pic from './router/pic.js';

const port = 8080;

const server = http.createServer((req, res) => {
  const path = parser.path(req.url);
  const query = parser.query(req.url);

  switch (path[0]) {
    case 'foo':
      foo(req, res, path.slice(1, path.length), query);
      break;
    case 'pic':
      pic(req, res, path.slice(1, path.length), query);
      break;
    default:
      res.writeHead(200);
      res.write('Hello World!');
      res.end();
      break;
  }
});

server.listen(port);

console.log(`running on ${port}`);
