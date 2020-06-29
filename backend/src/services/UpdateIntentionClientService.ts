import { getCustomRepository } from "typeorm";

import IIntentionRepository from "../repositories/IIntentionRepository";
import IUsersRepository from "../repositories/IUsersRepository";
import IntentionRepository from "../repositories/IntentionRepository";
import Intention from "../models/Intention";

import UserRepository from "../repositories/UserRepository";

import AppError from "../errors/AppError";

interface Request {
  intention_id: string;
  client_id: string;
}

export default class UpdateIntentionClientService {
  constructor(
    private intentionRepository: IIntentionRepository,
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(
    { client_id, intention_id }: Request,
  ): Promise<Intention> {
    await this.usersRepository.verifyUser(client_id);
    await this.intentionRepository.verifyClient(client_id);

    const intention = await this.intentionRepository.findById(intention_id);

    if (!intention) {
      throw new AppError(
        "Id informado incorretamente ou Id do cliente já preenchido",
      );
    }

    intention.client_id = client_id;

    await this.intentionRepository.save(intention);

    return intention;
  }
}
