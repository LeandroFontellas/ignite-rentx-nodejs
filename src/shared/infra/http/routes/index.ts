import { categoriesRoutes } from "@modules/cars/routes/categories.routes";
import { specificationsRoutes } from "@modules/cars/routes/specification.routes";
import { authenticateRoutes } from "@modules/users/routes/authenticate.routes";
import { usersRoutes } from "@modules/users/routes/users.routes";
import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router();

router.use("/sessions", authenticateRoutes);
router.use("/users", usersRoutes);

router.use(ensureAuthenticated);
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);

export { router };
