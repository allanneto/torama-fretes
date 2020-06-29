import FakeIntentionRepository from "../repositories/fakes/FakeIntentionRepository";
import CreateIntentionService from "./CreateIntentionService";
import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository";
import CreateUserService from "../services/CreateUserService";

describe("CreateIntention", () => {
  it("should be able to create a new intention", async () => {
    const fakeIntentionRepository = new FakeIntentionRepository();

    const createIntention = new CreateIntentionService(fakeIntentionRepository);

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

    expect(intention).toHaveProperty("id");
  });

  it("should be able to create a new intention", async () => {
    const fakeIntentionRepository = new FakeIntentionRepository();

    const intention = await fakeIntentionRepository.create({
      zip_code_start: "3213131231",
      zip_code_end: "04120120",
      quantity: 1,
      height: 10,
      length: 15,
      width: 20,
      price: 100,
      weight: 2,
    });

    expect(intention).toHaveProperty("id");
  });
});
