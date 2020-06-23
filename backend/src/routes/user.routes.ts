import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
  const createUser = new CreateUserService();

  const { name, email, telephone, cnpj } = req.body;

  const user = await createUser.execute({ cnpj, name, email, telephone });

  return res.json(user);
});

export default usersRouter;
