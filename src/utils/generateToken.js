import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {
  const payload = { id: userId };

  if (!process.env.JWT_EXPIRES_IN) throw new Error('JWT is not defined');

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.ENV_NODE === 'production',
    sameSite: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });

  return token;
};
