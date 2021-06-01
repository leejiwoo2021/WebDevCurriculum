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
      res.writeHead(400);
      res.end('bad request');
      break;
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

      try {
        fs.writeFileSync('pic.jpg', fileData);
      } catch (err) {
        console.log(err);
        res.writeHead(400, {
          // 400~? 500~?
          'Content-type': 'text/plain;charset=utf-8',
        });
        res.end('파일 업로드중 오류가 발생했습니다.');
      }
      res.writeHead(201);
      res.end();
    });
}

function showGet(req, res, path, query) {
  try {
    const file = fs.readFileSync('pic.jpg');
    res.writeHead(200, {
      'Content-Type': 'image/png',
    });
    res.write(file);
    res.end();
  } catch (err) {
    console.log(err);
    res.writeHead(404, {
      'Content-type': 'text/plain;charset=utf-8',
    });
    res.end('이미지가 존재하지 않습니다.');
  }
}

function downloadGet(req, res, path, query) {
  const stream = fs.createReadStream('pic.jpg');
  stream.on('error', (err) => {
    console.log(err);
    res.writeHead(404, {
      'Content-type': 'text/plain;charset=utf-8',
    });
    res.end('이미지가 존재하지 않습니다.');
  });

  res.writeHead(200, {
    'Content-disposition': 'attachment;filename=pic.jpg',
  });
  stream.pipe(res);
}

export default router;
