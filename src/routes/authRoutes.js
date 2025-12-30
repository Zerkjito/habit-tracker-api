import express from 'express';
import { ipLimiter } from '../middleware/rateLimit.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { register } from '../controllers/authController';

const router = express.Router();
router.use(ipLimiter);

router.post('/register', authMiddleware, register);
// router.post('/login');
// router.post('/logout');

export default router;
