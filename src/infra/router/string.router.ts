import checkTokenMeddeware from "@common/auth.middleware";
import Container from "@common/ContainerOk";
import StringController from "@infra/controllers/String.controller";

import express from "express";

export const stringRouter = express.Router();

const stringController: StringController = Container.resolve("stringController") as StringController;

stringRouter.post("/set",  stringController.Set);
stringRouter.get("/",  stringController.GetAll);
stringRouter.get("/:id",  stringController.Get);
