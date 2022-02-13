import { ICreateSpecificationDTO } from "@modules/cars/dtos/ICreateSpecificationDTO";
import { Specification } from "@modules/cars/entities/Specification";
import { getRepository, Repository } from "typeorm";

import { ISpecificationRepository } from "../ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO) {
    const newSpecification = this.repository.create({
      name,
      description,
    });

    return this.repository.save(newSpecification);
  }

  async list() {
    return this.repository.find();
  }

  async findByName(name: string) {
    return this.repository.findOne({ where: { name } });
  }
}
