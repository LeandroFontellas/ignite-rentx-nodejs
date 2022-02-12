import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportFileCategoryUseCase } from "./ImportFileCategoryUseCase";

export class ImportFileCategoryController {
  async handle(request: Request, response: Response) {
    const { file } = request;

    const importFileCategoryUseCase = container.resolve(
      ImportFileCategoryUseCase
    );

    await importFileCategoryUseCase.execute(file);

    return response.send();
  }
}
