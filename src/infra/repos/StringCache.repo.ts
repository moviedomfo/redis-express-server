import { IStringRepository } from "@application/interfases/IStringRepository";
import { DateFunctions } from "@common/helpers";
import redisClient from "@infra/db/redisCnn";
import { createClient } from "redis";
const messagesTimeout: number = 22; //seconds
/**Persist to mongodb Persons */
export default class StringCacheRepo implements IStringRepository {


  public Set(key: string, value: string): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const expirationTimestamp = DateFunctions.getExpirationTimestamp(1);

        const options_setTTL = {
          //EX: 60 * 11, // Establecer el tiempo de vida en segundos
          //NX: true, // Establecer la clave solo si no existe
          //XX: true, // Establecer la clave solo si existe
          //KEEPTTL: true, // Mantener el tiempo de vida actual
          EXAT: expirationTimestamp
        };
        // We can use this too->redisClient.setEx(key,messagesTimeout,value);
        const res = await redisClient.set(key, value, options_setTTL);

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

  /**
   * Sets a key to a new value, returning the old value as the result
   * @param key Existent key
   * @param value New value
   * @returns Old Value 
   */
  public Getset(key: string, value: string): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const res = await redisClient.getSet(key, value);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }

  GetAll: () => Promise<string[]>;
  
  public Del(key: string): Promise<number> {
    return new Promise<number>(async (resolve, reject) => {
      try {

       const res = await redisClient.del(key);

        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }


}
