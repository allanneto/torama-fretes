import { Router } from "express";

import intentionRouter from "./intention.routes";
import userRouter from "./user.routes";

const routes = Router();

routes.use("/intention", intentionRouter);
routes.use("/user", userRouter);

export default routes;
