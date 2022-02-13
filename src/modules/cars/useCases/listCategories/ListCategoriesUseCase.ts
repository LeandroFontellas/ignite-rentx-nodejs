import { ICategoryRepository } from "@modules/cars/repositories/ICategoryRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute() {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}
