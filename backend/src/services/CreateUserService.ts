import { getCustomRepository } from 'typeorm';

import * as Yup from 'yup';
import User from '../models/User';
import UserRepository from '../repositories/UserRepository';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  cnpj: string;
  telephone: string;
}

export default class CreateUserService {
  public async execute({
    name,
    cnpj,
    email,
    telephone,
  }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UserRepository);

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

    if (!(await schema.isValid(verifyUser))) {
      throw new AppError('Validation fails');
    }

    const duplicatedUser = await usersRepository.verifyDuplicated(cnpj);

    if (duplicatedUser) {
      return duplicatedUser;
    }

    const user = usersRepository.create(verifyUser);

    await usersRepository.save(user);

    return user;
  }
}
