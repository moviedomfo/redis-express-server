import checkTokenMeddeware from "@common/auth.middleware";
import Container from "@common/ContainerOk";
import PelsoftController from "@infra/controllers/Pelsoft.controller";

import express from "express";

export const pelsoftRouter = express.Router();

const controller: PelsoftController = Container.resolve("pelsoftController") as PelsoftController;


pelsoftRouter.post("/", controller.Create);
pelsoftRouter.get("/", controller.Get);
pelsoftRouter.get("/:collection/:id", controller.Get);
pelsoftRouter.delete("/:id", controller.Delete);