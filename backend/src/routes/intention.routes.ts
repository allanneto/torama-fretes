import { Router } from 'express';
import * as Yup from 'yup';

interface IntentionInfo {
  zip_code_start: string;
  zip_code_end: string;
  volumes: {
    quantity: number;
    height: number;
    length: number;
    width: number;
    price: number;
    weight: number;
  };
}

const intentionRouter = Router();

intentionRouter.get('/', async (req, res) => {
  return res.json({ loxt: 'burrp  ' });
});

intentionRouter.post('/', async (req, res) => {
  const schema = Yup.object().shape({
    zip_code_end: Yup.string().required(),
    zip_code_start: Yup.string().required(),
    volumes: Yup.object().shape({
      quantity: Yup.number().required(),
      height: Yup.number().required(),
      length: Yup.number().required(),
      price: Yup.number().required(),
      weight: Yup.number().required(),
    }),
  });

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

  const intention: IntentionInfo = {
    zip_code_end,
    zip_code_start,
    volumes: {
      height,
      length,
      price,
      quantity,
      weight,
      width,
    },
  };

  if (!(await schema.isValid(intention))) {
    return res.json('Erro na validação.');
  }
  return res.json({
    zip_code_start,
    zip_code_end,
    lead: false,
  });
});

export default intentionRouter;
