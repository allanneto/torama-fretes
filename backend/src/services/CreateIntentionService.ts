import Intention from "../models/Intention";
import IIntentionRepository from "../repositories/IIntentionRepository";

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

class CreateIntentionService {
  constructor(private intentionRepository: IIntentionRepository) {}

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
    const intentionData = {
      zip_code_end,
      zip_code_start,
      height,
      length,
      price,
      quantity,
      weight,
      width,
    };

    const intention = await this.intentionRepository.create(intentionData);

    if (!intention) {
      throw new Error("Erro na base de dados");
    }

    return intention;
  }
}
export default CreateIntentionService;
