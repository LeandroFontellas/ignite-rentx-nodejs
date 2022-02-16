import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { getRepository, Repository } from "typeorm";

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findByPk(id: string): Promise<User | undefined> {
    return this.repository.findOne(id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOne({ email });
  }

  async create({
    id,
    name,
    email,
    password,
    driver_license,
    avatar,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      id,
      name,
      email,
      password,
      driver_license,
      avatar,
    });

    return this.repository.save(user);
  }
}
