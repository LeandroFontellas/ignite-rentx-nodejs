import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/entities/User";
import { getRepository, Repository } from "typeorm";

import { IUserRepository } from "../IUserRepository";

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

  async create(data: ICreateUserDTO): Promise<User> {
    /**
     * Não vou fazer desestruturação pq vou achar que o controller e service está enviando
     * os dados de forma correta para o repositorio. Já que é papel do controller delegar
     * as informações corretamente para os lugares
     */
    const user = this.repository.create(data);

    return this.repository.save(user);
  }
}
