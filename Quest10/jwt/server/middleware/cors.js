function allowCors(req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', '*');
  res.append('Access-Control-Allow-Headers', '*');

  next();
}

exports.allowCors = allowCors;
