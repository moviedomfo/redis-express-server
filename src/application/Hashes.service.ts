import { IHashesService } from "@domain/IHashesService";
import {IHashesRepository} from "./interfases/IHashesRepository";
import { Person } from "@domain/DTOs/Person";

export default class HashesService implements IHashesService {
  constructor(private readonly hashesRepo: IHashesRepository) {}

  public async Set(key: string, field: string, value: string): Promise<string> {
    return this.hashesRepo.Set(key, field, value);
  }

  public async Get(key: string, field: string): Promise<string> {
    return this.hashesRepo.Get(key, field);
  }

  public async SetObj(key: string,  value: Person): Promise<string> {
    return this.hashesRepo.SetObj(key, value);
  }
  public async GetObj(key: string): Promise<Person> {
    return this.hashesRepo.GetObj(key);
  }
}
