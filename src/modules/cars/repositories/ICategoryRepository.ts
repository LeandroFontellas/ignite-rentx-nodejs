import { ICreateCategoryDTO } from "@modules/cars/dtos/ICreateCategoryDTO";
import { Category } from "@modules/cars/entities/Category";

export interface ICategoryRepository {
  findByName(name: string): Promise<Category | undefined>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<Category>;
}
