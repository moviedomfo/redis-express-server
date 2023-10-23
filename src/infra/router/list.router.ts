import Container from "@common/ContainerOk";
import ListController from "@infra/controllers/List.controller";
import express from "express";
export const listRouter = express.Router();

const listController: ListController = Container.resolve("listController") as ListController;

listRouter.post("/push", listController.Push);
listRouter.get("/pop", listController.Pop);
listRouter.get("/getById/:id", listController.GetById);
// listRouter.get("/customers/:name", listController.GetAllCustomer);
listRouter.get("/getAll/", listController.GetAll);
