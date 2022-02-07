import { ICategoryRepository } from "../../repositories/ICategoryRepository";

export class ImportFileCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute(file: string) {
    return file;
  }
}
