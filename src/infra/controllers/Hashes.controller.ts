import {CreateHashesDto} from "@domain/DTOs/CreateHashesDto";
import {NextFunction, Request, Response} from "express";
import {IHashesService} from "@domain/IHashesService";

/**
 * Redis hashes are record types structured as collections of field-value pairs. You can use hashes to represent basic objects and to store groupings of counters, among other things.
 */

export default class HashesController {
  constructor(private readonly hashesService: IHashesService) {}

  public Set = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const itemCache: CreateHashesDto = req.body as CreateHashesDto;

      await this.hashesService.Set(itemCache.Key, itemCache.Field, itemCache.Value);
      res.status(200).send();
    } catch (e) {
      next(e);
    }
  };

  
  public Get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const key = req.params.key;
      const field = req.params.field;
      if (!key || !field) throw new Error("Invalid parameters");
      const result = await this.hashesService.Get(key, field);

      if (result) res.status(200).send(result);
      else res.status(204).send();
    } catch (e) {
      next(e);
    }
  };
}
