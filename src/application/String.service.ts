import { IStringService } from "@domain/IStringService";
import { IStringRepository } from "./interfases/IStringRepository";

export default class StringService implements IStringService {


  constructor(private readonly stringRepo: IStringRepository) {

  }

  public async Set(key: string, value: string): Promise<string> {
    return this.stringRepo.Set(key, value);
  }

  public async Get(key: string): Promise<string> {
    return this.stringRepo.Get(key);
  }
  public async Getset(key: string, value: string): Promise<string> {
    return this.stringRepo.Getset(key, value);
  }
  public async GetAll() {
    return this.stringRepo.GetAll();
  }
  public async Del(key: string): Promise<number> {
    return this.stringRepo.Del(key);
  }
}
