import {IStringRepository} from "@application/interfases/IStringRepository";
import redisClient from "@infra/db/redisCnn";
import {createClient} from "redis";

/**Persist to mongodb Persons */
export default class StringnCacheRepo implements IStringRepository {
  public Set(key: string, value: string): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const res = await redisClient.SET(key, value);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }
  public Get(key: string): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const res = await redisClient.GET(key);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }

  GetAll: () => Promise<string[]>;
}
