import express from 'express';
const router = express.Router();

router.get('/', function (req: express.Request, res: express.Response) {
  res.send('Server is running!');
});

export default router;
