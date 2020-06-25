import { Router } from 'express';

import fakeapi from '../api/fakeapi';

import CreateIntentionService from '../services/CreateIntentionService';
import UpdateIntentionClientService from '../services/UpdateIntentionClientService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const intentionRouter = Router();

//Register new Intention
intentionRouter.post('/', async (req, res) => {
  const {
    zip_code_start,
    zip_code_end,
    quantity,
    height,
    length,
    width,
    price,
    weight,
  } = req.body;

  const createIntention = new CreateIntentionService();

  const intention = await createIntention.execute({
    zip_code_start,
    zip_code_end,
    width,
    weight,
    quantity,
    price,
    length,
    height,
  });

  return res.json(intention);
});

// Register client_id
intentionRouter.put('/:id', async (req, res) => {
  const updateIntention = new UpdateIntentionClientService();

  const idsDTO = {
    client_id: req.body.client_id,
    intention_id: req.params.id,
  };

  const intention = await updateIntention.execute(idsDTO);

  return res.json(intention);
});

// Intentions return
intentionRouter.get('/', ensureAuthenticated, async (req, res) => {
  return res.json(fakeapi);
});

export default intentionRouter;
