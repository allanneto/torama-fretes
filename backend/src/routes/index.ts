import { Router } from 'express';

import intentionRouter from './intention.routes';

const routes = Router();

routes.use('/intention', intentionRouter);

export default routes;
