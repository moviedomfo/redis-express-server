import {LogFunctions} from "@common/helpers/logFunctions";
import {IListRepository} from "@application/interfases/IListRepository";
import {ListBE} from "@domain/Entities/ListBE";
import {RedisClientOptions, createClient} from "redis";
import {DateFunctions} from "@common/helpers/dateFunctions";
import {ExeptionFunctions} from "@common/helpers/ExeptionFunctions";
import {rejects} from "assert";
import {ListElementDto} from "@domain/DTOs/ListElementDto";

/**Persist to mongodb Persons */
export default class ListRedisRepository implements IListRepository {
  public Push(req: ListElementDto): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const client = createClient({
          url: "redis://localhost:6379",
          password: "pletorico28",
        });

        const keys = `${req.Data}:${req.Key}`;
        const element = `${req.Key}:${req.Data}`;
        await client.connect();

        await client.lPush(keys, element);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  public Pop(group: string, key: string): Promise<ListBE> {
    return new Promise<ListBE>(async (resolve, reject) => {
      try {
        const client = createClient({
          url: "redis://localhost:6379",
          password: "pletorico28",
        });

        const keys = `${group}:${key}`;
        await client.connect();

        const res6 = await client.lPop(keys);

        var list: ListBE = new ListBE("12");
        resolve(list);
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
