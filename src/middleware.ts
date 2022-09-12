import { Request, Response, NextFunction } from "express";

// Simple logger to display whats gets tossed around on endpoints.
export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.path);
    console.log(req.body);
    next();
};