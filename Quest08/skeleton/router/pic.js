let image;

function router(req, res, path, query) {
  switch (path[0]) {
    case 'upload':
      switch (req.method) {
        case 'POST':
          // uploadPost(req, res, path, query);
          break;
      }
      break;
    case 'show':
      switch (req.method) {
        case 'GET':
          // showGet(req, res, path, query);
          break;
      }
      break;
    case 'download':
      switch (req.method) {
        case 'GET':
          break;
      }
      break;
    default:
      res.end();
  }
}

function uploadPost(req, res, path, query) {
  let body = [];
  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString('base64');
      image = body;
      // res.write(body);
      res.end();
    });
}

function showGet(req, res, path, query) {
  res.writeHead(200, {
    'Content-Type': 'image/png',
  });
  res.end(image);
}

export default router;
