import { getCustomRepository } from "typeorm";

import IntentionRepository from "../repositories/IntentionRepository";
import Intention from "../models/Intention";

import UserRepository from "../repositories/UserRepository";

import AppError from "../errors/AppError";

interface Request {
  intention_id: string;

  client_id: string;
}

export default class UpdateIntentionClientService {
  public async execute(
    { client_id, intention_id }: Request,
  ): Promise<Intention> {
    const intentionRepository = getCustomRepository(IntentionRepository);
    const userRepository = getCustomRepository(UserRepository);

    await userRepository.verifyUser(client_id);
    await intentionRepository.verifyClient(client_id);

    const intention = await intentionRepository.findOne({
      where: {
        id: intention_id,
        client_id: null,
      },
    });

    if (!intention) {
      throw new AppError(
        "Id informado incorretamente ou Id do cliente já preenchido",
      );
    }

    intention.client_id = client_id;

    await intentionRepository.save(intention);

    return intention;
  }
}
