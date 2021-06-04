function fileName(req, res, next) {
  const name = req.query.name;

  if (!name) {
    res.status(400);
    res.end('파일 이름 필드가 존재하지 않습니다');
    return;
  }
  next();
}

function fileNameBody(req, res, next) {
  const { name } = req.body;

  if (!name) {
    res.status(400);
    res.end('파일 이름 필드가 존재하지 않습니다');
    return;
  }
  next();
}

function fileNameContent(req, res, next) {
  const { name, content } = req.body;

  if (!name || !content) {
    res.status(400);
    res.end('파일 이름 또는 내용 필드가 존재하지 않습니다');
    return;
  }
  next();
}

function idPw(req, res, next) {
  const { id, pw } = req.body;

  if (!id || !pw) {
    res.status(400);
    res.end('ID 또는 패스워드가 존재하지 않습니다');
    return;
  }
  next();
}

exports.fileName = fileName;
exports.fileNameContent = fileNameContent;
exports.idPw = idPw;
exports.fileNameBody = fileNameBody;
