import {NextFunction, Request, Response} from "express";
import {IListService} from "@domain/IListService";
import {ListElementDto} from "@domain/DTOs/ListElementDto";

/**
 * Redis lists are linked lists of string values.
 */
export default class ListController {
  constructor(private readonly listService: IListService) {}

  public Push = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let item: ListElementDto = JSON.parse(JSON.stringify(req.body));

      await this.listService.Push(item);

      res.status(200).send();
    } catch (e) {
      next(e);
    }
  };

  public LPop = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {group, key} = req.query;
      const item = await this.listService.LPop(group.toString(), key.toString());

      if (item) res.status(200).send(item);
      else res.status(204).send();
    } catch (e) {
      next(e);
    }
  };
  public RPop = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {group, key} = req.query;
      const item = await this.listService.RPop(group.toString(), key.toString());

      if (item) res.status(200).send(item);
      else res.status(204).send();
    } catch (e) {
      next(e);
    }
  };


  public ClearAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      await this.listService.ClearAll();
      res.status(200).send(true);
    } catch (e) {
      next(e);
    }
  };
}
