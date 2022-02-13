import { User } from "@modules/users/entities/User";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user: User;
  avatarFile: string | undefined;
}

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ user, avatarFile }: IRequest) {
    const updatedUser = { ...user };

    if (avatarFile) {
      updatedUser.avatar = avatarFile;

      await this.userRepository.create(updatedUser);

      return;
    }
    throw new AppError("No file were uploaded, try again!", 400);
  }
}
