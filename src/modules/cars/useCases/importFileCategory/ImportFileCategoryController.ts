import { Request, Response } from "express";

import { ImportFileCategoryUseCase } from "./ImportFileCategoryUseCase";

export class ImportFileCategoryController {
  constructor(private importFileCategoryUseCase: ImportFileCategoryUseCase) {}
  handle(request: Request, response: Response) {
    const { file } = request;

    this.importFileCategoryUseCase.execute(file);

    return response.send();
  }
}
