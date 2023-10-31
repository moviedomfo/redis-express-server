import Container from "@common/ContainerOk";
import ListController from "@infra/controllers/List.controller";
import express from "express";
export const listRouter = express.Router();

const listController: ListController = Container.resolve("listController") as ListController;

listRouter.post("/push", listController.Push);
listRouter.get("/rpop", listController.RPop);
listRouter.get("/lpop", listController.LPop);

