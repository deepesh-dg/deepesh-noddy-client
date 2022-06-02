import { Router } from "@deepeshgupta/noddy";
import welcome from "./welcome.js";

const router = new Router();

router.use({ path: "/welcome", router: welcome });

export default router;
