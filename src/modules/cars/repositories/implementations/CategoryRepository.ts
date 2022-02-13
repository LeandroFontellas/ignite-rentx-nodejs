import { ICreateCategoryDTO } from "@modules/cars/dtos/ICreateCategoryDTO";
import { Category } from "@modules/cars/entities/Category";
import { getRepository, Repository } from "typeorm";

import { ICategoryRepository } from "../ICategoryRepository";

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
