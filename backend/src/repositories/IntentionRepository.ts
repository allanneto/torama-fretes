import { getRepository, Repository } from "typeorm";

import * as Yup from "yup";

import Intention from "../models/Intention";
import AppError from "../errors/AppError";
import IIntentionRepository from "./IIntentionRepository";
import ICreateIntentionDTO from "../dtos/ICreateIntentionDTO";

class IntentionRepository implements IIntentionRepository {
  private ormRepository: Repository<Intention>;
  constructor() {
    this.ormRepository = getRepository(Intention);
  }

  public async verifyClient(client_id: string): Promise<object | undefined> {
    const findClient = await this.ormRepository.findAndCount({
      where: {
        client_id,
      },
    });

    if (findClient[1] === 3) {
      throw new AppError("Limite de 3 cotações atingido para esse CNPJ");
    }

    return findClient;
  }

  public async create({
    height,
    length,
    price,
    quantity,
    weight,
    width,
    zip_code_end,
    zip_code_start,
  }: ICreateIntentionDTO): Promise<Intention> {
    const intentionInfo = {
      zip_code_end,
      zip_code_start,
      volumes: {
        height,
        length,
        price,
        quantity,
        weight,
        width,
      },
    };

    const schema = Yup.object().shape({
      zip_code_end: Yup.string().required(),
      zip_code_start: Yup.string().required(),
      volumes: Yup.object().shape({
        quantity: Yup.number().required(),
        height: Yup.number().required(),
        length: Yup.number().required(),
        price: Yup.number().required(),
        weight: Yup.number().required(),
      }),
    });

    if (!(await schema.isValid(intentionInfo))) {
      throw new AppError("Erro na validação.");
    }

    const intention = this.ormRepository.create(intentionInfo);

    await this.ormRepository.save(intention);

    return intention;
  }

  public async findById(id: string): Promise<Intention | undefined> {
    const intention = await this.ormRepository.findOne(id);

    return intention;
  }

  public async save(intention: object): Promise<Intention> {
    await this.ormRepository.save(intention);

    return intention;
  }
}

export default IntentionRepository;
