import express from 'express';
import { logger } from './middleware';
const app = express();
const port = 3333;

app.use(express.json());

app.use(logger);

app.listen(port, () => {
  return console.log(`API is listening at http://localhost:${port}`);
});
