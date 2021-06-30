import express from 'express';
const router = express.Router();
import * as checker from '../middleware/check.js';
import * as storage from '../model/sequelize.js';
import jwt from 'jsonwebtoken';

async function login(req: express.Request, res: express.Response): Promise<void> {
  const { id, pw } = req.body;

  if (await storage.auth(id, pw)) {
    console.log('로그인 성공');
    const token = jwt.sign({ iss: 'jiwoo', id: id, exp: Math.floor(Date.now() / 1000) + 10 * 60 }, 'jwSecret');
    res.status(200);
    res.json({
      token: token,
    });
  } else {
    console.log('로그인 실패');
    res.status(401);
    res.json({ msg: '존재하지 않는 ID거나, 패스워드가 일치하지 않습니다' });
  }
}
router.post('/login', checker.idPw, login);

export default router;
export { login };
