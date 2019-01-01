import express from 'express';
import { Server } from 'https';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ data: []});
});

export default router;
