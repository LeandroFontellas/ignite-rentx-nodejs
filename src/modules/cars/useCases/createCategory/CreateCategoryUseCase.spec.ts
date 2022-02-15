import { CategoryRepository } from "@modules/cars/repositories/fakes/FakeCategoryRepository";

import { AppError } from "@shared/errors/AppError";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let categoryRepository: CategoryRepository;
let createCategoryUseCase: CreateCategoryUseCase;

describe("Create a category", () => {
  beforeEach(() => {
    categoryRepository = new CategoryRepository();
    createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
  });

  it("should be able to create a new category", async () => {
    const category = await createCategoryUseCase.execute({
      name: "teste",
      description: "Oi",
    });

    expect(category).toHaveProperty("id");
    expect(category.name).toBe("teste");
  });

  it("should not be able to create a new category with duplicated names", async () => {
    await createCategoryUseCase.execute({
      name: "teste",
      description: "Oi",
    });

    expect(
      createCategoryUseCase.execute({
        name: "teste",
        description: "Oi2",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
