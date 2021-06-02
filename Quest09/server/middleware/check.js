function fileName(req, res, next) {
  const name = req.query.name;

  if (!name) {
    res.status(400);
    res.end('there is no file name');
    return;
  }
  next();
}

exports.fileName = fileName;
