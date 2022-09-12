// endpoint functions here
import { NextFunction, Request, Response } from 'express';
import { loadGamesJSON } from './fileOperations';


export const getAllGames= (req: Request, res: Response) => {
    res.send(loadGamesJSON("gameList.json"));
}