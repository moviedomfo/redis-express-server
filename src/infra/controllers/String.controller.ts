import {CreateCahcheDto} from "@domain/DTOs/CreateCahcheDto";
import {NextFunction, Request, Response} from "express";
import {IStringService} from "@domain/IStringService";

/**
 * Product controller
 */

export default class StringController {
  constructor(private readonly stringService: IStringService) {}

  public Set = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const itemCache: CreateCahcheDto = req.body as CreateCahcheDto;
 
      await this.stringService.Set(itemCache.Key, itemCache.Value);
      res.status(200).send();                      
      //else res.status(403).send();
    } catch (e) {
      next(e);
    }
  };
  public Get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const result = await this.stringService.Get(id);

      if (result) res.status(200).send(result);
      else res.status(204).send();
    } catch (e) {
      next(e);
    }
  };
  public GetAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {name, page, pageSize} = req.query;
      const currentPage = parseInt(page as string) || 1; // Página actual
      const limit = parseInt(pageSize as string) || 10; // Tamaño de página

      const result = await this.stringService.GetAll();

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
  public Del = async (req: Request, res: Response, next: NextFunction) => {

     try {
      const id = req.params.id;
      const result = await this.stringService.Del(id);
      res.send(result.toString());
    } catch (e) {
      next(e);
    }
  }
}
