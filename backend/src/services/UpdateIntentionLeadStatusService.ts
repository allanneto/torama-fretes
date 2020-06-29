import IIntentionRepository from "../repositories/IIntentionRepository";

import Intention from "../models/Intention";

import AppError from "../errors/AppError";

interface Request {
  intention_id: string;

  freight_id: string;
}

export default class UpdateIntentionLeadStatusService {
  constructor(private intentionRepository: IIntentionRepository) {}

  public async execute({
    intention_id,
    freight_id,
  }: Request): Promise<Intention> {
    const intention = await this.intentionRepository.findById(intention_id);

    if (!intention) {
      throw new AppError("Id informado nao consta na base de dados");
    }

    if (!intention.client_id) {
      throw new AppError("Id do client ainda não foi registrado");
    }

    if (intention.freight_id) {
      throw new AppError("O campo de Id do frete já foi preenchido");
    }

    intention.freight_id = freight_id;
    intention.lead = true;

    await this.intentionRepository.save(intention);

    return intention;
  }
}
