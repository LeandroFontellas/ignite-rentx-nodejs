import { Router } from "express";

import { CategoryReposiroty } from "../modules/cars/repositories/CategoryRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();

const categoryRepository = new CategoryReposiroty();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);

  const category = createCategoryService.execute({
    name,
    description,
  });

  return response.status(201).json(category);
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoryRepository.list();

  return response.json(categories);
});

export { categoriesRoutes };
