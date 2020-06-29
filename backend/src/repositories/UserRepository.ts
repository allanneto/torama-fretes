import { Repository, getRepository } from "typeorm";

import User from "../models/User";
import AppError from "../errors/AppError";
import IUsersRepository from "../repositories/IUsersRepository";
import ICreateUserDTO from "../dtos/ICreateUserDTO";

class UserRepository implements IUsersRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User);
  }
  public async verifyUser(id: string): Promise<User> {
    const user = await this.ormRepository.findOne(id);

    if (!user) {
      throw new AppError("Id informado incorretamente.");
    }

    return user;
  }

  public async verifyDuplicated(cnpj: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        cnpj,
      },
    });

    return user;
  }

  public async create(
    { name, cnpj, email, telephone }: ICreateUserDTO,
  ): Promise<User> {
    const user = this.ormRepository.create({
      name,
      cnpj,
      email,
      telephone,
    });

    await this.ormRepository.save(user);

    return user;
  }
}

export default UserRepository;
