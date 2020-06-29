import { uuid } from "uuidv4";

import User from "../../models/User";
import AppError from "../../errors/AppError";
import IUsersRepository from "../../repositories/IUsersRepository";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";

class UserRepository implements IUsersRepository {
  private users: User[] = [];

  public async create(
    { name, cnpj, email, telephone }: ICreateUserDTO,
  ): Promise<User> {
    const user = new User();

    Object.assign(user, {
      id: uuid(),
      name,
      cnpj,
      email,
      telephone,
    });

    this.users.push(user);

    return user;
  }

  public async verifyUser(id: string): Promise<User> {
    const verifyUser = this.users.find((user) => user.id === id);

    if (!verifyUser) {
      throw new AppError("Id informado incorretamente.");
    }

    return verifyUser;
  }

  public async verifyDuplicated(cnpj: string): Promise<User | undefined> {
    const findDuplicated = this.users.find((user) => user.cnpj === cnpj);

    return findDuplicated;
  }
}

export default UserRepository;
