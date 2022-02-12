import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  async execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    const specification = await this.specificationRepository.create({
      name,
      description,
    });

    return specification;
  }
}
