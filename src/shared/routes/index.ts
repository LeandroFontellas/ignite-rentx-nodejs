import { Router } from "express";

import { categoriesRoutes } from "../../modules/cars/routes/categories.routes";
import { specificationsRoutes } from "../../modules/cars/routes/specification.routes";
import { usersRoutes } from "../../modules/users/routes/users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);

export { router };
