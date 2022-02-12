import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const specification = await this.createSpecificationUseCase.execute({
      name,
      description,
    });

    return response.status(201).json(specification);
  }
}
