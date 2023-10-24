import {IStringRepository} from "@application/interfases/IStringRepository";
import redisClient from "@infra/db/redisCnn";
import {createClient} from "redis";

/**Persist to mongodb Persons */
export default class StringCacheRepo implements IStringRepository {
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

  public GetAll(): Promise<string[]> {
    return new Promise<string[]>(async (resolve, reject) => {
      try {
        let l: string[] = [];
        //bike:1 "Deimos" bike:2 "Ares" bike:3 "Vanth"
        l.push("200:Deimos");
        l.push("202:Ares");
        l.push("203:Vanth");
        const res = await redisClient.MSET(l);
        let list: string[] = [];
        list.push(res);
        resolve(list);
      } catch (err) {
        reject(err);
      }
    });
  }

  
}
