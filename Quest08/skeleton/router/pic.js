import fs from 'fs';

function router(req, res, path, query) {
  switch (path[0]) {
    case 'upload':
      switch (req.method) {
        case 'POST':
          uploadPost(req, res, path, query);
          break;
      }
      break;
    case 'show':
      switch (req.method) {
        case 'GET':
          showGet(req, res, path, query);
          break;
      }
      break;
    case 'download':
      switch (req.method) {
        case 'GET':
          downloadGet(req, res, path, query);
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
      body = Buffer.concat(body);
      const fileData = new Uint8Array(Buffer.from(body));

      fs.writeFileSync('pic.jpg', fileData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      res.end();
    });
}

function showGet(req, res, path, query) {
  res.writeHead(200, {
    'Content-Type': 'image/png',
  });

  const file = fs.readFileSync('pic.jpg');
  res.write(file);
  res.end();
}

function downloadGet(req, res, path, query) {
  const stream = fs.createReadStream('pic.jpg');

  res.writeHead(200, {
    'Content-disposition': 'attachment;filename=pic.jpg',
  });
  stream.pipe(res);
}

export default router;
