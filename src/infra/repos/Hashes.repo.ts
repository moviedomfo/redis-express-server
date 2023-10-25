
import { IHashesRepository } from "@application/interfases/IHashesRepository";
import { Person } from "@domain/DTOs/Person";
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
   * @param value
   * @param field
   * @returns
   */
  public SetObj(key: string, value: Person): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {

        
        await redisClient.hSet(key, value);
      
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
  public GetObj(key: string): Promise<Person | undefined> {
    return new Promise<Person | undefined>(async (resolve, reject) => {
      try {
        //const res = await redisClient.hGetAll(key);
        const res2 = await redisClient.HGETALL(key);
        
        const person:Person = JSON.parse(JSON.stringify(res2));
        resolve(person);
      } catch (err) {
        reject(err);
      }
    });
  }
}
