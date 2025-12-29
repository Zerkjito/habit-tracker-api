import express from 'express';
import 'dotenv/config';
import logger from './config/logger.js';
import { connectDB, disconnectDB } from './config/db.js';

// Import routes
import authRoutes from './routes/authRoutes.js';
import habitRoutes from './routes/habitRoutes.js';
import registerRoutes from './routes/registerRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 5001;

// API routes
app.use('/auth', authRoutes);
app.use('/habits', habitRoutes);
app.use('/users', userRoutes);
app.use('/registers', registerRoutes);

const startServer = async () => {
  try {
    await connectDB();
    const server = app.listen(PORT, () => logger.info(`Server running on PORT ${PORT}`));

    process.on('unhandledRejection', (err) => {
      logger.error('Unhandled Rejection', err);
      server.close(async () => {
        await disconnectDB();
        process.exit(1);
      });
    });

    process.on('uncaughtException', async (err) => {
      logger.error('Uncaught Exception', err);
      await disconnectDB();
      process.exit(1);
    });

    process.on('SIGTERM', async () => {
      logger.info('SIGTERM recieved, shutting down gracefully');
      server.close(async () => {
        await disconnectDB();
        process.exit(0);
      });
    });
  } catch (error) {
    logger.error('Failed to start server', error);
    process.exit(1);
  }
};

startServer();
