import { Router } from "express";

import UserRepository from "../repositories/UserRepository";
import CreateUserService from "../services/CreateUserService";
import AuthenticateUserService from "../services/AuthenticateUserService";

const usersRouter = Router();

usersRouter.post("/", async (req, res) => {
  const usersRepository = new UserRepository();

  const createUser = new CreateUserService(usersRepository);
  const authenticateUser = new AuthenticateUserService();

  const { name, email, telephone, cnpj } = req.body;

  const user = await createUser.execute({ cnpj, name, email, telephone });

  const token = await authenticateUser.execute(user.id);

  return res.json({ user, token });
});

export default usersRouter;
