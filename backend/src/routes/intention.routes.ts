import { Router } from "express";

import fakeapi from "../api/fakeapi";

import CreateIntentionService from "../services/CreateIntentionService";
import UpdateIntentionClientService from "../services/UpdateIntentionClientService";
import UpdateIntentionLeadStatusService from "../services/UpdateIntentionLeadStatusService";

import IntentionRepository from "../repositories/IntentionRepository";
import UserRepository from "../repositories/UserRepository";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const intentionRouter = Router();

//Register new Intention
intentionRouter.post("/", async (req, res) => {
  const intentionRepository = new IntentionRepository();

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

  const createIntention = new CreateIntentionService(intentionRepository);

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
intentionRouter.put("/:id", async (req, res) => {
  const intentionRepository = new IntentionRepository();
  const usersRepository = new UserRepository();

  const updateIntention = new UpdateIntentionClientService(
    intentionRepository,
    usersRepository,
  );

  const idsDTO = {
    client_id: req.body.client_id,
    intention_id: req.params.id,
  };

  const intention = await updateIntention.execute(idsDTO);

  return res.json(intention);
});

intentionRouter.use(ensureAuthenticated);

// Update lead status
intentionRouter.put("/:id/lead", async (req, res) => {
  const updateIntentionLead = new UpdateIntentionLeadStatusService();

  const { freight_id } = req.body;
  const intention_id = req.params.id;

  const intention = await updateIntentionLead.execute({
    freight_id,
    intention_id,
  });

  return intention;
});

// Intentions return
intentionRouter.get("/", async (req, res) => {
  return res.json(fakeapi);
});

export default intentionRouter;
