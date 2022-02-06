import { Specification } from "../model/Specification";
import { ISpecificationRepository } from "./ISpecificationRepository";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export class SpecificationReposiroty implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  public create({ name, description }: ICreateSpecificationDTO) {
    const newSpecification = new Specification({
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(newSpecification);

    return newSpecification;
  }

  public list() {
    return this.specifications;
  }

  public findByName(name: string) {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }
}
