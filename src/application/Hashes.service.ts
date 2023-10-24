import {IHashesService} from "@domain/IHashesService";
import {IHashesRepository} from "./interfases/IHashesRepository";

export default class HashesService implements IHashesService {


  constructor(private readonly HashesRepo: IHashesRepository) {
      
  }
 

  public async Set(key: string,field:string, value: string): Promise<string> {
    return this.HashesRepo.Set(key,field,value);
  }

  public async Get(key: string,field:string): Promise<string> {
    return this.HashesRepo.Get(key,field);
  }
  

}
