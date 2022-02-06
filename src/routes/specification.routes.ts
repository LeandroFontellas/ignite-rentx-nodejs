import { Router } from "express";

import { SpecificationReposiroty } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

const specificationsRoutes = Router();

const specificationRepository = new SpecificationReposiroty();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  const specification = createSpecificationService.execute({
    name,
    description,
  });

  return response.status(201).json(specification);
});

specificationsRoutes.get("/", (request, response) => {
  const specifications = specificationRepository.list();

  return response.json(specifications);
});

export { specificationsRoutes };
