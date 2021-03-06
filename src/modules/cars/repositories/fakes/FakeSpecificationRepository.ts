import { ICreateSpecificationDTO } from "@modules/cars/dtos/ICreateSpecificationDTO";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

import { ISpecificationRepository } from "../ISpecificationRepository";

export class SpecificationReposiroty implements ISpecificationRepository {
  private specifications: Specification[];

  private static INSTANCE: ISpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!SpecificationReposiroty.INSTANCE) {
      SpecificationReposiroty.INSTANCE = new SpecificationReposiroty();
    }
    return this.INSTANCE;
  }

  async create({ name, description }: ICreateSpecificationDTO) {
    const newSpecification = new Specification();

    Object.assign(newSpecification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(newSpecification);

    return newSpecification;
  }

  async list() {
    return this.specifications;
  }

  async findByName(name: string) {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }
}
