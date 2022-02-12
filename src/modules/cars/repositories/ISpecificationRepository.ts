import { Specification } from "../entities/Specification";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  findByName(name: string): Promise<Specification | undefined>;
  list(): Promise<Specification[]>;
  create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification>;
}
