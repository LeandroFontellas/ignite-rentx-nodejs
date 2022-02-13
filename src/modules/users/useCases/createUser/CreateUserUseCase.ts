import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

type IRequest = ICreateUserDTO;

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}
  async execute(data: IRequest) {
    const hashedPassword = await hash(data.password, 8);

    const newUser = await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });

    return newUser;
  }
}
