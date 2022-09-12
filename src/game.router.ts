import express from 'express';
import { getAllGames } from './game.controller';

const gameRouter = express.Router();
// get list
gameRouter.get("/", getAllGames );
// post game with validation
gameRouter.post("/", );
// delete game with id
gameRouter.delete("/:id", );
// Update game with supplied id and validated body);
gameRouter.put("/:id", ); 

export default gameRouter;
