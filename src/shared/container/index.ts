import { ICategoryRepository } from "@modules/cars/repositories/ICategoryRepository";
import { CategoryRepository } from "@modules/cars/repositories/implementations/CategoryRepository";
import { SpecificationRepository } from "@modules/cars/repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { UserRepository } from "@modules/users/repositories/implementations/UserRepository";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { container } from "tsyringe";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
