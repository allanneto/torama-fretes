import FakeIntentionRepository from "../repositories/fakes/FakeIntentionRepository";
import CreateIntentionService from "./CreateIntentionService";
import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository";
import CreateUserService from "../services/CreateUserService";
import UpdateIntentioClientService from "../services/UpdateIntentionClientService";
import UpdateIntentionLeadStatusService from "../services/UpdateIntentionLeadStatusService";

import AppError from "../errors/AppError";

describe("UpdateLeadStatus", () => {
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

  const updateLead = new UpdateIntentionLeadStatusService(
    fakeIntentionRepository,
  );

  it("should be able to update lead status", async () => {
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

    await updateIntention.execute({
      client_id: user.id,
      intention_id: intention.id,
    });

    const updatedLead = await updateLead.execute(
      { intention_id: intention.id, freight_id: "231313" },
    );

    expect(updatedLead.lead).toBe(true);
  });

  it("should not be able to update lead status and receive client_id error", async () => {
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

    // const updatedLead = await updateLead.execute(
    //   { intention_id: intention.id, freight_id: "231313" },
    // );

    expect(
      updateLead.execute(
        { intention_id: intention.id, freight_id: "231313" },
      ),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to update lead status and get Id error", async () => {
    expect(
      updateLead.execute(
        { intention_id: "321314", freight_id: "231313" },
      ),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to update lead status 2 times", async () => {
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

    await updateIntention.execute({
      client_id: user.id,
      intention_id: intention.id,
    });

    await updateLead.execute(
      { intention_id: intention.id, freight_id: "231313" },
    );

    expect(updateLead.execute(
      { intention_id: intention.id, freight_id: "231313" },
    )).rejects.toBeInstanceOf(AppError);
  });
});
