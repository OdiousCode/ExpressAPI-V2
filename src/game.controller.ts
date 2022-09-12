// endpoint functions here
import { Request, Response } from 'express';
import { loadGamesJSON } from './fileOperations';


export const getAllGames= (req: Request, res: Response) => {
    res.send(loadGamesJSON("gameList.json"));
}