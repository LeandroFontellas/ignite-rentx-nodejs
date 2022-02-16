import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/infra/typeorm/entities/User";

import { IUserRepository } from "../IUserRepository";

export class FakeUserRepository implements IUserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async create({
    id,
    name,
    email,
    driver_license,
    password,
    avatar,
  }: ICreateUserDTO): Promise<User> {
    const newUser = new User();

    Object.assign(newUser, {
      id,
      name,
      email,
      driver_license,
      password,
      avatar,
    });

    this.users.push(newUser);

    return newUser;
  }
  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
  async findByPk(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }
}
