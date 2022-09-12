import { Request, Response, NextFunction } from 'express';
import joi from 'joi';

// Simple logger to display whats gets tossed around on endpoints.
export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.path);
    console.log(req.body);
    next();
};

// validation functionality with joi
export function gameModelValidation(req: Request, res: Response, next: NextFunction) {
    const gameModelToValidate = joi.object( {
        title: joi.string().min(1).required(),
        genre: joi.string().min(3).required(),
        price: joi.number().min(0).required()
    });
    const validationResult = gameModelToValidate.validate(req.body);
    if (validationResult.error)
    {
        res.status(400).json(validationResult)
        return
    }
    next();
}