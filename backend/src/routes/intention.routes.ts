import { Router } from "express";
import { getCustomRepository } from "typeorm";

import CreateIntentionService from "../services/CreateIntentionService";
import UpdateIntentionClientService from "../services/UpdateIntentionClientService";

const intentionRouter = Router();

intentionRouter.get("/", async (req, res) => {
  return res.json({ loxt: "burro" });
});

intentionRouter.post("/", async (req, res) => {
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

  const intention = await createIntention.execute(
    {
      zip_code_start,
      zip_code_end,
      width,
      weight,
      quantity,
      price,
      length,
      height,
    },
  );

  return res.json(intention);
});

// Register client_id
intentionRouter.put("/:id", async (req, res) => {
  const updateIntention = new UpdateIntentionClientService();

  const idsDTO = {
    client_id: req.body.client_id,
    intention_id: req.params.id,
  };

  const intention = await updateIntention.execute(idsDTO);

  return res.json(intention);
});

export default intentionRouter;
