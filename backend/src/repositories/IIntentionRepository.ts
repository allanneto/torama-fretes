import Intention from "../models/Intention";
import ICreateIntentionDTO from "../dtos/ICreateIntentionDTO";

export default interface IIntentionRepository {
  verifyClient(client_id: string): Promise<object | undefined>;
  create(data: ICreateIntentionDTO): Promise<Intention | undefined>;
  findById(id: string): Promise<Intention | undefined>;
  save(intention: object): Promise<Intention | undefined>;
}
