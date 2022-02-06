import { Category } from "../../model/Category";
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

  public create({ name, description }: ICreateCategoryDTO) {
    const newCategory = new Category({
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(newCategory);

    return newCategory;
  }

  public list() {
    return this.categories;
  }

  public findByName(name: string) {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}
