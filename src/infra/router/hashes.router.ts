import Container from "@common/ContainerOk";
import HashesController from "@infra/controllers/Hashes.controller";
import express from "express";
export const hashesRouter = express.Router();

const hashesController: HashesController = Container.resolve("hashesController") as HashesController;

hashesRouter.post("/set", hashesController.Set);
hashesRouter.get("/get/:id", hashesController.Get);

