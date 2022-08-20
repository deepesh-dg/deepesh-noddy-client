import { NextFunction, Request, Response } from "express";
import { lib, Controller } from "@deepeshgupta/noddy";

export class Index extends Controller {
    public get(req: Request, res: Response, next: NextFunction) {
        const response = lib.api.ResponseApi.fake();

        res.locals.api.status = response.status;
        res.locals.api.headers = response.headers;
        res.locals.api.body = response.body;

        next();
    }
}
