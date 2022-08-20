// import cors from "cors";
import { Router } from "@deepeshgupta/noddy";
import { Index } from "../controllers/Index";
import index from "./index.routes";

const run = (): Router => {
    const router = new Router();

    router.use({ path: "/", controller: Index });
    router.use({ path: "/api", router: index });

    return router;
};

export default run;
