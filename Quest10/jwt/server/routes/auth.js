const express = require('express');
const router = express.Router();
const check = require('../middleware/check');
const user = require('../model/user');
const jwt = require('jsonwebtoken');

router.post('/login', check.idPw, function (req, res) {
  const { id, pw } = req.body;

  if (user.auth(id, pw)) {
    const token = jwt.sign({ id: id }, 'jwSecret');
    res.status(200);
    res.json({
      token: token,
    });
  } else {
    res.status(404);
    res.setHeader('Content-type', 'text/plain; charset=UTF8');
    res.send('존재하지 않는 ID거나, 패스워드가 일치하지 않습니다');
  }
});

module.exports = router;

// router.post('/', checker.fileNameContent, function (req, res) {
//   const { name, content } = req.body;
//   try {
//     fileModel.createFile(name, content);
//   } catch (err) {
//     console.log(err);
//     res.status(404);
//     res.send(err.toString());
//     return;
//   }

//   res.status(200);
//   res.send();
// });
