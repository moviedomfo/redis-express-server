import {IHashesService} from "@domain/IHashesService";
import {IHashesRepository} from "./interfases/IHashesRepository";

export default class HashesService implements IHashesService {
  constructor(private readonly hashesRepo: IHashesRepository) {}

  public async Set(key: string, field: string, value: string): Promise<string> {
    return this.hashesRepo.Set(key, field, value);
  }

  public async Get(key: string, field: string): Promise<string> {
    return this.hashesRepo.Get(key, field);
  }
}
