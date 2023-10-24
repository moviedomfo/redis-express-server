import {LogFunctions} from "@common/helpers/logFunctions";
import {IListRepository} from "@application/interfases/IListRepository";
import {ListBE} from "@domain/Entities/ListBE";
import {RedisClientOptions, createClient} from "redis";
import {DateFunctions} from "@common/helpers/dateFunctions";
import {ExeptionFunctions} from "@common/helpers/ExeptionFunctions";
import {rejects} from "assert";
import {ListElementDto} from "@domain/DTOs/ListElementDto";
import redisClient from "@infra/db/redisCnn";

/**Persist to mongodb Persons */
export default class ListRedisRepository implements IListRepository {

  /**
   * Insert or push item in stack 
   * @param req 
   * @returns 
   */
  public Push(req: ListElementDto): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const keys = `${req.Group}:${req.Key}`;
        const element = `${req.Key}:${req.Data}`;
        //await redisClient.connect();

        await redisClient.lPush(keys, element);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Get and remove the last element from stack: applying LIFO pattern
   * @param group 
   * @param key 
   * @returns 
   */
  public Pop(group: string, key: string): Promise<ListBE> {
    return new Promise<ListBE>(async (resolve, reject) => {
      try {
        const keys = `${group}:${key}`;

        const res6 = await redisClient.lPop(keys);
        if (res6) {
          let listItem: ListBE = new ListBE(res6);
          const s = keys.split(":");
          listItem.Group = group;
          listItem.Data = s[1];
          listItem.Key = s[0];
          resolve(listItem);
        }
        resolve(null);
      } catch (err) {
        reject(err);
      }
    });
  }

  public GetById(_id: string): Promise<ListBE> {
    return new Promise<ListBE>(async (resolve, reject) => {
      try {
        resolve(new ListBE("12"));
      } catch (error) {
        reject(error);
      }
    });
  }

  public async ClearAll(): Promise<void> {
    return new Promise<void>((resolve, _reject) => {
      //PersonsSchema.cl.deleteMany({});
      resolve();
    });
  }

  public async GetAll(): Promise<ListBE[]> {
    return new Promise<ListBE[]>(async (resolve, reject) => {
      try {
        resolve([]);
      } catch (err) {
        reject(err);
      }
    });
  }
}
