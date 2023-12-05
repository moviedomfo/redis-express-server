import { NextFunction, Request, Response } from "express";
import { IStringService } from "@domain/IStringService";
import { CreateCahcheReq } from "@domain/DTOs/pelsoft/CreateCahcheReq";
import PelsoftService from "@application/Pelsoft.service";

/**
 * Product controller
 */

export default class PelsoftController {
  constructor(private readonly pelsoftService: PelsoftService) { }

  public Create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const itemCache: CreateCahcheReq = req.body as CreateCahcheReq;

      await this.pelsoftService.Create(itemCache.collection, itemCache.id, JSON.stringify(itemCache.value));
      res.status(200).send();
      //else res.status(403).send();
    } catch (e) {
      next(e);
    }
  };

  public Get = async (req: Request, res: Response, next: NextFunction) => {
    try {


      const { id, collection } = req.query;
      if (!collection || !id) throw new Error("Invalid parameters");
      const result = await this.pelsoftService.Get(collection.toString(), id.toString());

      if (result) res.status(200).send(result);
      else res.status(204).send();
    } catch (e) {
      next(e);
    }
  };


  /**
   * 
   * @param req Remove strings values and another value types sotored with this key . It does not matter if is hashed, list, etc 
   * @param res 1 removed item existed, 0 not existed
   * @param next 
   */
  public Delete = async (req: Request, res: Response, next: NextFunction) => {

    try {


      const { id, collection } = req.query;
      if (!collection || !id) throw new Error("Invalid parameters");
      const result = await this.pelsoftService.Del(collection.toString(), id.toString());
      res.send(result.toString());
    } catch (e) {
      next(e);
    }
  }
}
