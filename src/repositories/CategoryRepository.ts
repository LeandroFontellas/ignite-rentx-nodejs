import { Category } from "../model/Category";
import { ICategoryRepository } from "./ICategoryRepository";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export class CategoryReposiroty implements ICategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  public create({ name, description }: ICreateCategoryDTO) {
    const newCategory = new Category({
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(newCategory);

    return newCategory;
  }

  public list() {
    return this.categories;
  }

  public findByName(name: string) {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}
