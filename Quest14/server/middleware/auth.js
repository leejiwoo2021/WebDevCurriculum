const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
  if (!req.get('Authorization')) {
    res.status(401);
    res.append('WWW-Authenticate', 'Bearer');
    res.json({
      message: 'no token',
    });
    return;
  }

  const token = req.get('Authorization').split(' ')[1];

  try {
    jwt.verify(token, 'jwSecret');
  } catch (err) {
    console.log('사용자 인증 실패, 만료되거나, 잘못된 토큰입니다');
    res.status(401);
    res.json({
      message: 'invalid token',
    });
    return;
  }
  req.token = token;
  next();
}

exports.verifyJWT = verifyJWT;
