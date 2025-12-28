import express from 'express';
import 'dotenv/config';
import logger from './config/logger.js';

const app = express();
const PORT = 5001;

const server = app.listen(PORT, () => logger.info(`Server running on PORT ${PORT}`));
