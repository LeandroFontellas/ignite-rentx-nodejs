import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./CategoryRepository";

export interface ICategoryRepository {
  findByName(name: string): Category | undefined;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): Category;
}
