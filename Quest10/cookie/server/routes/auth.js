const express = require('express');
const router = express.Router();
const check = require('../middleware/check');
const user = require('../model/user');
const session = require('../model/session');
const { v4: uuidv4 } = require('uuid');

router.post('/login', check.idPw, function (req, res) {
  const { id, pw } = req.body;

  if (user.auth(id, pw)) {
    const uuid = uuidv4();

    const sessionObj = session.getInstance();
    sessionObj.set(uuid, { id: id });

    res.append('Set-Cookie', `id=${uuid}; path=/`);
    res.end();
  } else {
    res.status(401);
    res.end();
  }
});

module.exports = router;
