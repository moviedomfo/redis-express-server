import { IStringRepository } from "./interfases/IStringRepository";

export default class PelsoftService {


  constructor(private readonly stringRepo: IStringRepository) {

  }

  public async Create(collection: string, id: string, value: string): Promise<string> {

    let key: string = `${collection}:${id}`;
    return this.stringRepo.Set(key, value);
  }

  public async Get(collection: string, id: string,): Promise<string> {
    let key: string = `${collection}:${id}`;
    return this.stringRepo.Get(key);
  }


  public async Del(collection: string, id: string): Promise<number> {
    let key: string = `${collection}:${id}`;

    return this.stringRepo.Del(key);
  }
}
