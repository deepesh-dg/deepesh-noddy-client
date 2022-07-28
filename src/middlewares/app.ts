import { Express, NextFunction, Request, Response } from "express";

const middleware = async (app: Express) => {
    app.use("/", (req: Request, res: Response, next: NextFunction) => next());
};

export default middleware;
