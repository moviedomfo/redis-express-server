import {LogFunctions} from "@common/helpers/logFunctions";
import {IListRepository} from "@application/interfases/IListRepository";
import {ListBE} from "@domain/Entities/ListBE";
import { RedisClientOptions, createClient } from 'redis';
import {DateFunctions} from "@common/helpers/dateFunctions";
import {ExeptionFunctions} from "@common/helpers/ExeptionFunctions";
import {rejects} from "assert";
import { ListElementDto } from '@domain/DTOs/ListElementDto';
import { IProductRepository } from "@application/interfases/IProductRepository";
import { CreateProductDto } from "@domain/DTOs/ProductDto";
import { ProductBE } from "@domain/Entities/ProductBE";

/**Persist to mongodb Persons */
export default class CommonCacheRepo implements IProductRepository {
  Create: (req: CreateProductDto) => Promise<string>;
  GetById: (id: string) => Promise<ProductBE>;
  GetAll: (name?: string, page?: number, pageSize?: number) => Promise<ProductBE[]>;


  
}
