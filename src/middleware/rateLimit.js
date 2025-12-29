import rateLimit from 'express-rate-limit';

export const ipLimiter = rateLimit({
  windowMs: 1000 * 60 * 10,
  limit: 100,
  message: {
    status: 'error',
    message: 'Too many IP requests, slow down!',
    code: 'TOO_MANY_REQUESTS_IP',
  },
  standardHeaders: true, // uses modern headers e.g RateLimit-Limit, RateLimit-Remaining, RateLimit-Reset etc
  legacyHeaders: false,
});

export const userLimiter = rateLimit({
  windowMs: 1000 * 60 * 10,
  limit: 50,
  keyGenerator: (req) => req.user?.id || req.ip,
  message: {
    status: 'error',
    message: 'Too many requests, slow down!',
    code: 'TOO_MANY_REQUESTS_USER',
  },
  standardHeaders: true,
  legacyHeaders: false,
});
