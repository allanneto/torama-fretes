import { getRepository } from "typeorm";

import * as Yup from "yup";
import Intention from "../models/Intention";
import AppError from "../errors/AppError";

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

interface IntentionDTO {
  zip_code_start: string;
  zip_code_end: string;
  volumes: {
    quantity: number;
    height: number;
    length: number;
    width: number;
    price: number;
    weight: number;
  };
}

class CreateIntentionService {
  public async execute(
    {
      height,
      length,
      price,
      quantity,
      weight,
      width,
      zip_code_end,
      zip_code_start,
    }: Request,
  ): Promise<Intention> {
    const intentionRepository = getRepository(Intention);

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

    const intentionInfo: IntentionDTO = {
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

    if (!(await schema.isValid(intentionInfo))) {
      throw new AppError("Erro na validação.");
    }

    const intention = intentionRepository.create(intentionInfo);

    await intentionRepository.save(intention);

    return intention;
  }
}
export default CreateIntentionService;
