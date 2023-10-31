import {ListElementDto} from "./DTOs/ListElementDto";
import {ListBE} from "./Entities/ListBE";

export interface IListService {
  /**
   * adds a new element to the head of a list; RPUSH adds to the tail.
   */
  Push: (req: ListElementDto) => Promise<void>;

  /**
   * Removes and returns an element from the from the bottom of the list (queue)
   * Treat a list like a queue FIFO 
   * @group : string
   * @key : string
   */
  LPop: (group: string, key: string) => Promise<ListBE>;

  /**
   * Removes and returns an element from the head of a list 
   * treat a list like a stack (LIFO)
   * @group : string
   * @key : string
   */
  RPop: (group: string, key: string) => Promise<ListBE>;





  ClearAll: () => Promise<void>;
}
