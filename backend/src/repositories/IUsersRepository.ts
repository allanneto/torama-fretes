import User from "../models/User";
import ICreateUser from "../dtos/ICreateUser";

export default interface IUsersRepository {
  verifyUser(id: string): Promise<User | undefined>;
  verifyDuplicated(cnpj: string): Promise<User | undefined>;
  create(data: ICreateUser): Promise<User>;
}
