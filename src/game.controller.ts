// endpoint functions here
import { NextFunction, Request, Response } from 'express';
import { loadGamesJSON, saveGamesJSON } from './fileOperations';
import { gamesArray } from './game.model';

// Reads our JSON file for games and returns them
export const getAllGames= (req: Request, res: Response) => {
    res.send(loadGamesJSON("gameList.json"));
}

export const findGame = (req: Request, res: Response) => {
    const gameToFind = gamesArray.find((game) => game.id === parseInt(req.params.id));
    if (!gameToFind) 
    {
        return res.status(404).send({alert: "Could not find a game with that ID" });
    }
    else
    {
        res.json(gameToFind);
    }
}