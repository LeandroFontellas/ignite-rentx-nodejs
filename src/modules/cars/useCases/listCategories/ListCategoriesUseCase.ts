import { ICategoryRepository } from "../../repositories/ICategoryRepository";

export class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute() {
    const categories = this.categoryRepository.list();

    return categories;
  }
}
