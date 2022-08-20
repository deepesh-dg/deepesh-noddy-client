// import cors from "cors";
import { Router } from "@deepeshgupta/noddy";
import { Index } from "../controllers/Index";
import index from "./index.routes";

const router = new Router();

/**
 * Setting up CORS policy for app
 */
// router.use({
//     path: "",
//     middlewares: cors({
//         // origin: conf.Config.get("appUrl"),
//         optionsSuccessStatus: prototypes.httpStatusCodes.OK,
//     }),
// });

router.use({ path: "/", controller: Index });
router.use({ path: "/api", router: index });

export default router;
