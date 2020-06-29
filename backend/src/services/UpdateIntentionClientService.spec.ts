import FakeIntentionRepository from "../repositories/fakes/FakeIntentionRepository";
import CreateIntentionService from "./CreateIntentionService";
import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository";
import CreateUserService from "../services/CreateUserService";
import UpdateIntentioClientService from "../services/UpdateIntentionClientService";

import AppError from "../errors/AppError";

describe("UpdateIntentionClient", () => {
  const fakeIntentionRepository = new FakeIntentionRepository();
  const fakeUsersRepository = new FakeUsersRepository();
  const createUser = new CreateUserService(fakeUsersRepository);
  const createIntention = new CreateIntentionService(
    fakeIntentionRepository,
  );

  const updateIntention = new UpdateIntentioClientService(
    fakeIntentionRepository,
    fakeUsersRepository,
  );

  it("should be able to update client_id", async () => {
    const intention = await createIntention.execute({
      zip_code_start: "3213131231",
      zip_code_end: "04120120",
      quantity: 1,
      height: 10,
      length: 15,
      width: 20,
      price: 100,
      weight: 2,
    });

    const user = await createUser.execute({
      name: "SteVASP Ltda",
      email: "register2231h@twitch.com",
      telephone: "12312312331",
      cnpj: "68.989.810/0001-38",
    });

    const updatedIntention = await updateIntention.execute({
      client_id: user.id,
      intention_id: intention.id,
    });

    expect(updatedIntention).toHaveProperty("client_id");
  });

  it("should be able to update client_id", async () => {
    const user = await createUser.execute({
      name: "SteVASP Ltda",
      email: "register2231h@twitch.com",
      telephone: "12312312331",
      cnpj: "68.989.810/0001-38",
    });

    expect(updateIntention.execute({
      client_id: user.id,
      intention_id: "2312321",
    })).rejects.toBeInstanceOf(AppError);
  });
});
