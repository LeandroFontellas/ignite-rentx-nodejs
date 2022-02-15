import { FakeUserRepository } from "@modules/users/repositories/fakes/FakeUserRepository";

import { AppError } from "@shared/errors/AppError";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let fakeUserRepository: FakeUserRepository;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate a user", () => {
  beforeEach(async () => {
    fakeUserRepository = new FakeUserRepository();
    authenticateUserUseCase = new AuthenticateUserUseCase(fakeUserRepository);
    createUserUseCase = new CreateUserUseCase(fakeUserRepository);

    await createUserUseCase.execute({
      name: "leandro",
      email: "teste@email.com",
      password: "123456",
      driver_license: "nao tenho",
    });
  });

  it("should be able to authenticate a user", async () => {
    const user = await authenticateUserUseCase.execute({
      email: "teste@email.com",
      password: "123456",
    });

    expect(user).toHaveProperty("token");
  });

  it("should not be able to authenticate a user with wrong/non-existent email", async () => {
    expect(
      authenticateUserUseCase.execute({
        email: "teste1@email.com",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate a user with wrong/non-existent password", async () => {
    expect(
      authenticateUserUseCase.execute({
        email: "teste@email.com",
        password: "1234567",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
