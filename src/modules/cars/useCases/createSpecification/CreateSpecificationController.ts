import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const specification = this.createSpecificationUseCase.execute({
      name,
      description,
    });

    return response.status(201).json(specification);
  }
}
