import {IStringService} from "@domain/IStringService";
import {IStringRepository} from "./interfases/IStringRepository";

export default class StringService implements IStringService {


  constructor(private readonly stringRepo: IStringRepository) {
      
  }

  public async Set(key: string, value: string): Promise<string> {
    return this.stringRepo.Set(key,value);
  }

  public async Get(key: string): Promise<string> {
    return this.stringRepo.Get(key);
  }
  
  public async GetAll() {
    return this.stringRepo.GetAll();
  }
}
