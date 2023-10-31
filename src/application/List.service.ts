import {ListBE} from "@domain/Entities/ListBE";
import {IKafkaMessageDto, ImessageDto} from "@domain/DTOs/MessageDto";
import {IEventBusRepository} from "./interfases/IEventBusRepository";
import {IListRepository} from "./interfases/IListRepository";
import {IListService} from "@domain/IListService";
import ListRepository from "@infra/repos/ListRedis.repo";
import PersonWasCreatedEvent from "./events/PersonWasCreatedEvents";
import {or} from "sequelize";

// @Route("ListService")
export default class ListService implements IListService {
  private readonly _listRepository: IListRepository;

  constructor(private readonly listRepository: IListRepository) {
    this._listRepository = listRepository;
  }

  /**
   * New customme is registered online
   * 1) persist to redis
   * @param item
   * @origin Api app caller
   */
  public async Push(list: ListBE): Promise<void> {
    try {
      const id = await this._listRepository.Push(list);
    } catch (err) {
      //console.log("push err  " + JSON.stringify(err));
      throw err;
    }
  }

  public async LPop(group: string, key: string): Promise<ListBE> {
    return this._listRepository.LPop(group, key);
  }
  
  public async RPop(group: string, key: string): Promise<ListBE> {
    return this._listRepository.RPop(group, key);
  }

  public async ClearAll(): Promise<void> {
    return this._listRepository.ClearAll();
  }
}
