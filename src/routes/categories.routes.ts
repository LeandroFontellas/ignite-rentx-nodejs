import { Router } from "express";

import { CategoryReposiroty } from "../modules/cars/repositories/CategoryRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();

const categoryRepository = new CategoryReposiroty();

categoriesRoutes.post("/", (request, response) =>
  createCategoryController.handle(request, response)
);

categoriesRoutes.get("/", (request, response) => {
  const categories = categoryRepository.list();

  return response.json(categories);
});

export { categoriesRoutes };
