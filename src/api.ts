import express from 'express';
import { logger } from './middleware';
import gameRouter from './game.router';

const app = express();
const port = 4444;

app.use(express.json());

// Logs endpoint action to console
app.use(logger);
// Get all routes
app.use("/api/games", gameRouter);
app.listen(port, () => {
  return console.log(`API is listening at http://localhost:${port}`);
});


