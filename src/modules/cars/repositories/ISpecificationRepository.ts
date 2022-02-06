import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO } from "./SpecificationRepository";

export interface ISpecificationRepository {
  findByName(name: string): Specification | undefined;
  list(): Specification[];
  create({ name, description }: ICreateSpecificationDTO): Specification;
}
