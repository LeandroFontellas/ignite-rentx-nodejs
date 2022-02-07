import { parse } from "csv-parse";
import fs from "fs";

import { ICategoryRepository } from "../../repositories/ICategoryRepository";

export class ImportFileCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute(file: Express.Multer.File | undefined): void {
    if (file) {
      const stream = fs.createReadStream(file.path);

      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile.on("data", async (line) => {
        console.log(line);
      });
    }
  }
}
