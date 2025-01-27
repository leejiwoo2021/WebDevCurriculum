const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
  const token = req.get('token');
  if (!token) {
    res.status(401);
    res.json({
      message: 'no token',
    });
    return;
  }

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

  next();
}

exports.verifyJWT = verifyJWT;
