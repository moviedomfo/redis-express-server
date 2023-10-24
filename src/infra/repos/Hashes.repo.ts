import {IHashesRepository} from "@application/interfases/IHashesRepository";
import redisClient from "@infra/db/redisCnn";

/**Persist to mongodb Persons */
export default class HashesRepo implements IHashesRepository {
  /**
   *
   * @param key
   * @param value
   * @param field
   * @returns
   */
  public Set(key: string, value: string, field: string): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const res = await redisClient.hSet(key, value, field);
        resolve("ok");
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   *
   * @param key
   * @param field
   * @returns
   */
  public Get(key: string, field: string): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const res = await redisClient.hGet(key, field);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }
}
