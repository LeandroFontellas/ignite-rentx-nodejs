import { ICreateCategoryDTO } from "@modules/cars/dtos/ICreateCategoryDTO";
import { ICategoryRepository } from "@modules/cars/repositories/ICategoryRepository";
import { getRepository, Repository } from "typeorm";

import { Category } from "../entities/Category";

export class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO) {
    const category = this.repository.create({
      name,
      description,
    });

    return this.repository.save(category);
  }

  async list() {
    return this.repository.find();
  }

  async findByName(name: string) {
    return this.repository.findOne({ where: { name } });
  }
}
