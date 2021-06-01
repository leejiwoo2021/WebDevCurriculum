function router(req, res, path, query) {
  switch (req.method) {
    case 'GET':
      get(req, res, path, query);
      break;
    case 'POST':
      post(req, res, path, query);
      break;
    default:
      res.writeHead(400);
      res.end('bad request');
      break;
  }
}

function get(req, res, path, query) {
  if (query.bar) {
    res.writeHead(200);
    res.write(`Hello, ${query.bar}!`);
    res.end();
  } else {
    res.writeHead(400, {
      'Content-type': 'text/plain;charset=utf-8',
    });
    res.end('queryString bar 속성이 존재하지 않습니다.');
  }
}

function post(req, res, path, query) {
  let body = [];
  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('error', (err) => {
      console.log(err);
      res.writeHead(400, {
        'Content-type': 'text/plain;charset=utf-8',
      });
      res.end('요청중에 오류가 발생했습니다.');
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      const jsonData = JSON.parse(body);
      res.writeHead(200);
      res.end(`Hello, ${JSON.stringify(jsonData)}`);
    });
}

export default router;
