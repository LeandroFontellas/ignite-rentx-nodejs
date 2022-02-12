import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ImportFileCategoryController } from "./ImportFileCategoryController";
import { ImportFileCategoryUseCase } from "./ImportFileCategoryUseCase";

export default () => {
  const categoryRepository = new CategoryRepository();
  const importFileCategoryUseCase = new ImportFileCategoryUseCase(
    categoryRepository
  );
  return new ImportFileCategoryController(importFileCategoryUseCase);
};
