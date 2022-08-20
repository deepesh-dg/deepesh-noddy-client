import { Request, Response, NextFunction } from "express";
import { prototypes, Controller, conf } from "@deepeshgupta/noddy";

export class WelcomeId extends Controller {
    private appInfo;

    constructor() {
        super();
        this.appInfo = {
            app: {
                framework: conf.Config.get("app.name"),
                developedBy: conf.Config.get("app.developedBy"),
                social: conf.Config.get("app.social"),
                version: conf.Config.get("app.version"),
            },
        };
    }

    public get(req: Request, res: Response, next: NextFunction) {
        res.locals.sendApi = {
            status: prototypes.httpStatusCodes.OK,
            headers: {},
            body: {
                ...this.appInfo,
                id: req.params.id,
            },
        };

        next();
    }
}
