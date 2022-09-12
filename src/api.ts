import express from 'express';
import { logger } from './middleware';
import gameRouter from './game.router';

const app = express();
const port = 4444;

app.use(express.json());

// Logs endpoint action and body to console
app.use(logger);

app.listen(port, () => {
  return console.log(`API is listening at http://localhost:${port}`);
});

// Get all routes
app.use("/api/games", gameRouter);

