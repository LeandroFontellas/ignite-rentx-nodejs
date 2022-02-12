import { Request, Response } from "express";

import { ImportFileCategoryUseCase } from "./ImportFileCategoryUseCase";

export class ImportFileCategoryController {
  constructor(private importFileCategoryUseCase: ImportFileCategoryUseCase) {}
  async handle(request: Request, response: Response) {
    const { file } = request;

    await this.importFileCategoryUseCase.execute(file);

    return response.send();
  }
}
