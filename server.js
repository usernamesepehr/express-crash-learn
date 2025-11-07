import dotenv from 'dotenv';
import express from 'express';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/posts', posts);

app.listen(port, console.log(`server is okay port ${port}`));