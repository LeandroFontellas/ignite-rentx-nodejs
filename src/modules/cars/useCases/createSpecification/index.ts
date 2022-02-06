import { SpecificationReposiroty } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationReposiroty.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);
export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
