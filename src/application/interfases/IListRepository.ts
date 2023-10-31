import { ListElementDto } from "@domain/DTOs/ListElementDto";
import { ListBE } from "@domain/Entities/ListBE";

/**
 * Lists are linked lists of string values
 */
export interface IListRepository {

  Push: (req: ListElementDto) => Promise<void>;
  /**Treat a list like a queue (first in, first out) */
  RPop: (group: string, key: string) => Promise<ListBE>;
  /**Treat a list like a stack (first in, last out) */
  LPop: (group: string, key: string) => Promise<ListBE>;
  ClearAll: () => Promise<void>;

}
