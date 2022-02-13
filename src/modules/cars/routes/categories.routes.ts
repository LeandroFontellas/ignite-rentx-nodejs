import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../useCases/createCategory/CreateCategoryController";
import { ImportFileCategoryController } from "../useCases/importFileCategory/ImportFileCategoryController";
import { ListCategoriesController } from "../useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importFileCategoryController = new ImportFileCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importFileCategoryController.handle
);

export { categoriesRoutes };
