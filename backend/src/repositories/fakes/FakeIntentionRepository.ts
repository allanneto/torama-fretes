import { uuid } from "uuidv4";

import IIntentionRepository from "../../repositories/IIntentionRepository";
import Intention from "../../models/Intention";
import AppError from "../../errors/AppError";

interface Request {
  zip_code_start: string;
  zip_code_end: string;
  quantity: number;
  height: number;
  length: number;
  width: number;
  price: number;
  weight: number;
}

class IntentionRepository implements IIntentionRepository {
  private intentions: Intention[] = [];

  public async create({
    zip_code_end,
    zip_code_start,
    height,
    length,
    price,
    quantity,
    weight,
    width,
  }: Request): Promise<Intention | undefined> {
    const intention = new Intention();

    Object.assign(intention, {
      id: uuid(),
      zip_code_end,
      zip_code_start,
      volume: {
        height,
        length,
        price,
        quantity,
        weight,
        width,
      },
    });

    this.intentions.push(intention);

    return intention;
  }

  public async verifyClient(client_id: string): Promise<object | undefined> {
    const findClient = this.intentions.filter((intention) =>
      intention.client_id === client_id
    );

    if (findClient.length === 3) {
      throw new AppError("Limite de 3 cotações atingido para esse CNPJ");
    }

    return findClient;
  }

  public async findById(id: string): Promise<Intention | undefined> {
    const findIntention = this.intentions.find((intention) =>
      intention.id === id
    );

    return findIntention;
  }

  public async save(intention: Intention): Promise<Intention> {
    const findIndex = this.intentions.findIndex((item) =>
      item.id === intention.id
    );

    this.intentions[findIndex] = intention;

    return intention;
  }
}

export default IntentionRepository;
