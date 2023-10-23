import Container from "@common/ContainerOk";
import ListController from "@infra/controllers/List.controller";
import express from "express";
export const personRouter = express.Router();

const listController: ListController = Container.resolve("listController") as ListController;

personRouter.post("/pop", listController.Pop);
personRouter.post("/push", listController.Push);
personRouter.get("/getById/:id", listController.GetById);
// personRouter.get("/customers/:name", listController.GetAllCustomer);
personRouter.get("/getAll/", listController.GetAll);
