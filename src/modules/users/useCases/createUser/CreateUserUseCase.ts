import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

type IRequest = ICreateUserDTO;

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}
  async execute(data: IRequest) {
    const emailExists = await this.userRepository.findByEmail(data.email);

    if (emailExists) {
      throw new AppError("Email already exists");
    }

    const hashedPassword = await hash(data.password, 8);

    const newUser = await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });

    return newUser;
  }
}
