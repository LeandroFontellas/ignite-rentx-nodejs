import { SpecificationReposiroty } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export default () => {
  const specificationRepository = new SpecificationReposiroty();
  const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationRepository
  );
  return new CreateSpecificationController(createSpecificationUseCase);
};
