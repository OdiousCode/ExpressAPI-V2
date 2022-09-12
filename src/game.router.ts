import express from 'express';
import { createGame, findGame, getAllGames } from './game.controller';
import { gameModelValidation } from './middleware';

const gameRouter = express.Router();
// get list
gameRouter.get("/", getAllGames );
// get specific game
gameRouter.get("/:id", findGame );
// post game with validation
gameRouter.post("/", gameModelValidation ,createGame);
// delete game with id
gameRouter.delete("/:id", );
// Update game with supplied id and validated body);
gameRouter.put("/:id", ); 

export default gameRouter;
