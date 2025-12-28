import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = 5001;

const server = app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
