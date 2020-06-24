import { Repository, EntityRepository } from "typeorm";

import Intention from "../models/Intention";
import AppError from "../errors/AppError";

@EntityRepository(Intention)
class IntentionRepository extends Repository<Intention> {
  public async verifyClient(
    client_id: string,
  ): Promise<object> {
    const findClient = await this.findAndCount({
      where: {
        client_id,
      },
    });

    if (findClient[1] === 3) {
      throw new AppError("Limite de 3 cotações atingido para esse CNPJ");
    }

    return findClient;
  }
}

export default IntentionRepository;
