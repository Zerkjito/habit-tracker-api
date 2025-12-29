import prisma from '../config/db.js';
import { generateToken } from '../utils/generateToken.js';
import { sendJSONError, sendJSONResponse } from '../utils/response.js';
import bcrypt from 'bcryptjs';
import { serializeUser } from '../utils/serialize.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await prisma.user.findUnique({ where: { email: email } });

  if (userExists) {
    return sendJSONError(res, 'User already exists with this email', 409, 'USER_ALREADY_EXISTS');
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = bcrypt.hash(password, salt);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const token = generateToken(user.id, res);
  sendJSONResponse(res, { user: serializeUser(user) }, 201);
};
