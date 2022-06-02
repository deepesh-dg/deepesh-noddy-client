import { Router } from "@deepeshgupta/noddy";
import { Welcome } from "../controllers/Welcome.js";
import { WelcomeId } from "../controllers/Welcome[id].js";

const router = new Router();

router.use({ path: "/", controller: Welcome });
router.use({ path: "/:id", controller: WelcomeId });

export default router;
