import { ICreateCategoryDTO } from "@modules/cars/dtos/ICreateCategoryDTO";
import { Category } from "@modules/cars/entities/Category";

import { ICategoryRepository } from "../ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  async create({ name, description }: ICreateCategoryDTO) {
    const newCategory = new Category();

    Object.assign(newCategory, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(newCategory);

    return newCategory;
  }

  async list() {
    return this.categories;
  }

  async findByName(name: string) {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}
