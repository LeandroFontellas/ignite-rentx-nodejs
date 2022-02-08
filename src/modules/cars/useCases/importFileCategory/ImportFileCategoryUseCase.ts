import { parse } from "csv-parse";
import fs from "fs";

import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IImportCategory {
  name: string;
  description: string;
}

export class ImportFileCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  private loadCategories(
    file: Express.Multer.File
  ): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File | undefined): Promise<void> {
    if (file) {
      const categories = await this.loadCategories(file);

      categories.map(async (category) => {
        const { name, description } = category;

        const existCategory = this.categoryRepository.findByName(name);

        if (!existCategory) {
          this.categoryRepository.create({
            name,
            description,
          });
        }
      });
    }
  }
}
