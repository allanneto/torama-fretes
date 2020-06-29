import AuthenticateUserService from "../services/AuthenticateUserService";

describe("AuthenticateService", () => {
  it("should be able to authenticate", async () => {
    const authenticateUser = new AuthenticateUserService();

    const token = authenticateUser.execute("123123");

    expect(token);
  });
});
