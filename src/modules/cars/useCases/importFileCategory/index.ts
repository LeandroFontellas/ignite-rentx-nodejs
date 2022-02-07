import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ImportFileCategoryController } from "./ImportFileCategoryController";
import { ImportFileCategoryUseCase } from "./ImportFileCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance();
const importFileCategoryUseCase = new ImportFileCategoryUseCase(
  categoryRepository
);
export const importFileCategoryController = new ImportFileCategoryController(
  importFileCategoryUseCase
);
