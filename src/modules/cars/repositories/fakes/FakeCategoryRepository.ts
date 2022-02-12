import { Category } from "../../entities/Category";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "../ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
  private categories: Category[];

  private static INSTANCE: ICategoryRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance() {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return this.INSTANCE;
  }

  async create({ name, description }: ICreateCategoryDTO) {
    const newCategory = new Category();

    Object.assign(newCategory, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(newCategory);

    return newCategory;
  }

  async list() {
    return this.categories;
  }

  async findByName(name: string) {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}
