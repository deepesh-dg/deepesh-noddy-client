import { Request, Response, NextFunction } from "express";
import { prototypes, Controller, lib, conf } from "@deepeshgupta/noddy";

const debug = new lib.log.Logger({ moduleName: "app:controller-welcome" });

export class Welcome extends Controller {
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
            },
        };

        next();
    }

    public post(req: Request, res: Response, next: NextFunction) {
        res.locals.sendApi = {
            status: prototypes.httpStatusCodes.OK,
            headers: {},
            body: {
                ...req.body,
                ...this.appInfo,
            },
        };

        next();
    }

    public patch(req: Request, res: Response, next: NextFunction) {
        res.locals.sendApi = {
            status: prototypes.httpStatusCodes.OK,
            headers: {},
            body: {
                ...req.body,
                ...this.appInfo,
            },
        };

        next();
    }

    public put(req: Request, res: Response, next: NextFunction) {
        res.locals.sendApi = {
            status: prototypes.httpStatusCodes.OK,
            headers: {},
            body: {
                ...req.body,
                ...this.appInfo,
            },
        };

        next();
    }

    public delete(req: Request, res: Response, next: NextFunction) {
        res.locals.sendApi = {
            status: prototypes.httpStatusCodes.OK,
            headers: {},
            body: {
                ...this.appInfo,
            },
        };

        next();
    }
}
