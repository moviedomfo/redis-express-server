import checkTokenMeddeware from "@common/auth.middleware";
import Container from "@common/ContainerOk";
import PelsoftController from "@infra/controllers/Pelsoft.controller";

import express from "express";

export const stringRouter = express.Router();

const controller: PelsoftController = Container.resolve("PelsoftController") as PelsoftController;


stringRouter.post("/",  controller.Create);

stringRouter.get("/:collection/:id",  controller.Get);
stringRouter.delete("/:id",  controller.Delete);