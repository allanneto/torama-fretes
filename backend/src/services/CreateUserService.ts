import { getRepository } from 'typeorm';

import * as Yup from 'yup';
import User from '../models/User';

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
    const usersRepository = getRepository(User);

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      cnpj: Yup.string().required(),
      telephone: Yup.string().max(13).required(),
    });

    const verifyUser = {
      name,
      cnpj,
      email,
      telephone,
    };

    const user = usersRepository.create(verifyUser);

    await usersRepository.save(user);

    return user;
  }
}
