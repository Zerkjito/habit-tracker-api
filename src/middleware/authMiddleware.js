import jwt from 'jsonwebtoken';
import { sendJSONError, sendJSONResponse } from '../utils/response';
import prisma from '../config/db';

const authMiddleware = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies?.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return sendJSONError(res, 'Not authorized, no token provided', 401, 'NO_AUTH_TOKEN');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) {
      return sendJSONError(res, 'User no longer exists', 401, 'USER_NO_LONGER_EXISTS');
    }

    req.user = user;
    next();
  } catch (error) {
    return sendJSONError(res, 'Invalid or expired token', 401, 'INVALID_TOKEN');
  }
};

export default authMiddleware;
