import { NextFunction, Request, Response } from "express";
import { lib, Controller } from "@deepeshgupta/noddy";

export class Index extends Controller {
  public get(req: Request, res: Response, next: NextFunction) {
    res.locals = {
      sendApi: lib.api.ResponseApi.fake(),
    };

    next();
  }
}
