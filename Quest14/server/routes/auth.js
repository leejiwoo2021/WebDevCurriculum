const express = require('express');
const router = express.Router();
const check = require('../middleware/check');
const storage = require('../model/sequelize');
const jwt = require('jsonwebtoken');

router.post('/login', check.idPw, async function (req, res) {
  const { id, pw } = req.body;

  if (await storage.auth(id, pw)) {
    console.log('로그인 성공');
    const token = jwt.sign(
      { iss: 'jiwoo', id: id, exp: Math.floor(Date.now() / 1000) + 10 * 60 },
      'jwSecret'
    );
    res.status(200);
    res.json({
      token: token,
    });
  } else {
    console.log('로그인 실패');
    res.status(401);
    res.json({ msg: '존재하지 않는 ID거나, 패스워드가 일치하지 않습니다' });
  }
});

module.exports = router;
