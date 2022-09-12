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

export const createGame = (req: Request, res: Response) => {
    const gameToAdd = {
        id: gamesArray.length +1,
        title: req.body.title,
        genre: req.body.genre,
        price: req.body.price,
    };
    gamesArray.push(gameToAdd);
    saveGamesJSON(gamesArray);
    res.status(200).send({alert: "Added a new game to the list of games."})
};


export const deleteGame = (req: Request, res: Response) => {
    const gameToDelete = gamesArray.find((g) => g.id === parseInt(req.params.id));
    if(!gameToDelete) 
    {
        return res.status(404).send({alert: "No game with ID " + req.params.id + " to delete"});
    }
    const deleteIndex = gamesArray.indexOf(gameToDelete);
    gamesArray.splice(deleteIndex, 1);
    saveGamesJSON(gamesArray);
    res.status(200).send({alert: "The game with ID " + gameToDelete.id + " has been deleted."});
};

export const updateGame = (req: Request, res: Response) =>  {
    const gameToUpdate = gamesArray.find((g) => g.id === parseInt(req.params.id));
    if(!gameToUpdate) 
    {
        return res.status(404).send({alert: "Could not find a game with that ID to update"});
    }
    else{
    gameToUpdate.title = req.body.title;
    gameToUpdate.genre = req.body.genre;
    gameToUpdate.price = req.body.price;
    const updateIndex = gamesArray.indexOf(gameToUpdate);
    gamesArray.splice(updateIndex, 1);
    gamesArray.push(gameToUpdate);
    saveGamesJSON(gamesArray);
    res.status(200).send({alert: "The game with ID "+ req.params.id + " has been updated successfully."});
    }
};