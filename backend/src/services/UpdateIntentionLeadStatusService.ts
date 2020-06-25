import { getCustomRepository } from 'typeorm';

import IntentionRepository from '../repositories/IntentionRepository';
import Intention from '../models/Intention';

import AppError from '../errors/AppError';

interface Request {
  intention_id: string;

  freight_id: string;
}

export default class UpdateIntentionLeadStatusService {
  public async execute({
    intention_id,
    freight_id,
  }: Request): Promise<Intention> {
    const intentionRepository = getCustomRepository(IntentionRepository);

    const intention = await intentionRepository.findOne(intention_id);

    if (!intention) {
      throw new AppError('Id informado não existe na base de dados');
    }

    if (!intention.client_id) {
      throw new AppError('Id do client ainda não foi registrado');
    }

    if (intention.freight_id) {
      throw new AppError('O campo de Id do frete já foi preenchido');
    }

    intention.freight_id = freight_id;
    intention.lead = true;

    await intentionRepository.save(intention);

    return intention;
  }
}
