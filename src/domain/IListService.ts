import {ListElementDto} from "./DTOs/ListElementDto";
import {ListBE} from "./Entities/ListBE";

export interface IListService {
  /**
   * adds a new element to the head of a list; RPUSH adds to the tail.
   */
  Push: (req: ListElementDto) => Promise<void>;

  /**
   * removes and returns an element from the head of a list e.g :'bikes:repairs'
   * @group : string
   * @key : string
   */
  Pop: (group: string, key: string) => Promise<ListBE>;

  /**
   *
   * @returns
   */
  GetAll: () => Promise<ListBE[]>;

  /**
   *
   * @param id Provider Id
   * @returns
   */
  GetById: (id: string) => Promise<ListBE>;

  ClearAll: () => Promise<void>;
}
