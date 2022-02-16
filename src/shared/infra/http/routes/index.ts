import { categoriesRoutes } from "@modules/cars/infra/http/routes/categories.routes";
import { specificationsRoutes } from "@modules/cars/infra/http/routes/specification.routes";
import { authenticateRoutes } from "@modules/users/infra/http/routes/authenticate.routes";
import { usersRoutes } from "@modules/users/infra/http/routes/users.routes";
import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router();

router.use("/sessions", authenticateRoutes);
router.use("/users", usersRoutes);

router.use(ensureAuthenticated);
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);

export { router };
