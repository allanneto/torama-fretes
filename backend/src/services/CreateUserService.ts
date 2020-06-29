import * as Yup from "yup";
import User from "../models/User";
import IUsersRepository from "../repositories/IUsersRepository";
import AppError from "../errors/AppError";

interface Request {
  name: string;
  email: string;
  cnpj: string;
  telephone: string;
}

export default class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}
  public async execute({
    name,
    cnpj,
    email,
    telephone,
  }: Request): Promise<User> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      cnpj: Yup.string().min(18).max(18).required(),
      telephone: Yup.string().max(13).required(),
    });

    const verifyUser = {
      name,
      cnpj,
      email,
      telephone,
    };

    const validate = await schema.isValid(verifyUser);

    if (!validate) {
      throw new AppError("Validation fails");
    }

    const duplicatedUser = await this.usersRepository.verifyDuplicated(cnpj);

    if (duplicatedUser) {
      return duplicatedUser;
    }

    const user = await this.usersRepository.create(verifyUser);

    return user;
  }
}
