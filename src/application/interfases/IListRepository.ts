import { ListElementDto } from "@domain/DTOs/ListElementDto";
import {ListBE} from "@domain/Entities/ListBE";

/**
 * 
 */
export interface IListRepository {
  
  Push: (req: ListElementDto) => Promise<void>;
  Pop: (group: string, key: string) => Promise<ListBE>;
  GetAll: () => Promise<ListBE[]>;
  ClearAll: () => Promise<void>;
    /**
   *
   * @param id Provider Id
   * @returns
   */
    GetById: (id: string) => Promise<ListBE>;
}
