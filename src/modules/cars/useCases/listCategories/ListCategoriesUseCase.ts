import { ICategoryRepository } from "../../repositories/ICategoryRepository";

export class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute() {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}
