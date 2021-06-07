const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
  const token = req.get('token');
  if (!token) {
    res.status(401);
    res.end();
    return;
  }

  try {
    jwt.verify(token, 'jwSecret');
  } catch (err) {
    console.log('사용자 인증 실패, 만료되거나, 잘못된 토큰입니다');
    res.status(401);
    res.redirect('http://localhost:3000/login');
    return;
  }

  next();
}

exports.verifyJWT = verifyJWT;
