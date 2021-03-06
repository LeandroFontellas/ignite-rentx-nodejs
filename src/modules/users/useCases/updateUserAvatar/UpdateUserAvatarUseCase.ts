import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { deleteFile } from "@shared/utils/file";

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
      if (user.avatar) {
        await deleteFile(`./tmp/avatar/${user.avatar}`);
      }

      updatedUser.avatar = avatarFile;

      await this.userRepository.create(updatedUser);

      return;
    }
    throw new AppError("No file were uploaded, try again!", 400);
  }
}
