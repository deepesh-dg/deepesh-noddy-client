import { Request, Response, NextFunction } from "express";
import { prototypes, Controller, lib, conf } from "@deepeshgupta/noddy";

export class Welcome extends Controller {
    private appInfo;
    private debug = new lib.log.Logger({
        moduleName: "app:controller-welcome",
    });

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
        res.locals.api.status = prototypes.httpStatusCodes.OK;
        res.locals.api.body = {
            ...this.appInfo,
        };
        next();
    }

    public post(req: Request, res: Response, next: NextFunction) {
        res.locals.api.status = prototypes.httpStatusCodes.OK;
        res.locals.api.body = {
            ...req.body,
            ...this.appInfo,
        };
        next();
    }

    public patch(req: Request, res: Response, next: NextFunction) {
        res.locals.api.status = prototypes.httpStatusCodes.OK;
        res.locals.api.body = {
            ...req.body,
            ...this.appInfo,
        };
        next();
    }

    public put(req: Request, res: Response, next: NextFunction) {
        res.locals.api.status = prototypes.httpStatusCodes.OK;
        res.locals.api.body = {
            ...req.body,
            ...this.appInfo,
        };
        next();
    }

    public delete(req: Request, res: Response, next: NextFunction) {
        res.locals.api.status = prototypes.httpStatusCodes.OK;
        res.locals.api.body = {
            ...this.appInfo,
        };
        next();
    }
}
