import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./CategoryRepository";
import { ICategoryRepository } from "./ICategoryRepository";

export class PostgresCategoryRepository implements ICategoryRepository {
  findByName(name: string): Category {
    throw new Error("Method not implemented.");
  }
  list(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({ name, description }: ICreateCategoryDTO): Category {
    throw new Error("Method not implemented.");
  }
}
