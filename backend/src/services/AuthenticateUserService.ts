import {} from 'typeorm';

import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

export default class AuthenticateUserService {
  public async execute(id: string): Promise<string> {
    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: id,
      expiresIn,
    });

    return token;
  }
}
