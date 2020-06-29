import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository";
import CreateUserService from "../services/CreateUserService";

import AppError from "../errors/AppError";

describe("CreateUser", () => {
  it("should be able to create a new User", async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    const user = await createUser.execute({
      name: "SteVASP Ltda",
      email: "register2231h@twitch.com",
      telephone: "12312312331",
      cnpj: "68.989.810/0001-38",
    });

    expect(user).toHaveProperty("id");
  });

  it("should be able to create an user with same e-mail", async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    const user = await createUser.execute({
      name: "SteVASP Ltda",
      email: "register2231h@twitch.com",
      telephone: "12312312331",
      cnpj: "68.989.810/0001-38",
    });

    const duplicatedUser = await createUser.execute({
      name: "SteVASP Ltda",
      email: "register2231h@twitch.com",
      telephone: "12312312331",
      cnpj: "68.989.810/0001-38",
    });

    expect(duplicatedUser.id).toMatch(user.id);
  });

  it("should be receive an instance of AppError", async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    expect(createUser.execute({
      name: "SteVASP Ltda",
      email: "",
      telephone: "12312312331",
      cnpj: "",
    })).rejects.toBeInstanceOf(AppError);
  });
});
