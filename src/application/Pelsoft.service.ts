import { IStringRepository } from "./interfases/IStringRepository";

export default class PelsoftService {


  constructor(private readonly pelsoftRepo: IStringRepository) {

  }

  public async Create(collection: string, id: string, value: string): Promise<string> {

    let key: string = `${collection}:${id}`;
    return this.pelsoftRepo.Set(key, value);
  }

  public async Get(collection: string, id: string,): Promise<string> {
    let key: string = `${collection}:${id}`;
    return this.pelsoftRepo.Get(key);
  }


  public async Del(collection: string, id: string): Promise<number> {
    let key: string = `${collection}:${id}`;

    return this.pelsoftRepo.Del(key);
  }
}
