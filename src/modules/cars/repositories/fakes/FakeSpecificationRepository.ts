import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

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
