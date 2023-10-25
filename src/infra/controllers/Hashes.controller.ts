import { CreateHashesDto, CreateHashesPersonDto } from "@domain/DTOs/CreateHashesDto";
import { NextFunction, Request, Response } from "express";
import { IHashesService } from "@domain/IHashesService";
import HashesService from "@application/Hashes.service";

/**
 * Redis hashes are record types structured as collections of field-value pairs. 
 * You can use hashes to represent basic objects and to store groupings of counters, among other things.
 * https://redis.io/docs/data-types/hashes/
 */

export default class HashesController {
  constructor(private readonly hashesService: HashesService) { }

  public Set = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const itemCache: CreateHashesDto = req.body as CreateHashesDto;

      await this.hashesService.Set(itemCache.Key, itemCache.Field, itemCache.Value);
      res.status(200).send();
    } catch (e) {
      next(e);
    }
  };
  public SetObj = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const itemCache: CreateHashesPersonDto = req.body as CreateHashesPersonDto;

      await this.hashesService.SetObj(itemCache.Key,  itemCache.Value);
      res.status(200).send();
    } catch (e) {
      next(e);
    }
  };


  public Get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const key = req.query.key;
      const field = req.query.field;
      if (!key || !field) throw new Error("Invalid parameters");
      const result = await this.hashesService.Get(key.toString(), field.toString());

      if (result) res.status(200).send(result);
      else res.status(204).send();
    } catch (e) {
      next(e);
    }
  };

  public GetObj = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const key = req.query.key;
      
      if (!key ) throw new Error("Invalid parameters");
      const result = await this.hashesService.GetObj(key.toString());

      if (result) res.status(200).send(result);
      else res.status(204).send();
    } catch (e) {
      next(e);
    }
  };
}
