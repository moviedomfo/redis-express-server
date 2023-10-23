import {ProductBE} from "@domain/Entities/ProductBE";
import {CreateProductDto} from "@domain/DTOs/ProductDto";
import {IProductService} from "@domain/IProductService";
import {IProductRepository} from "./interfases/IProductRepository";

export default class ProductService implements IProductService {
  constructor(
    private readonly productRepo: IProductRepository,
  ) {
    //this._productRepo = productRepo;
  }

  public async Create(req: CreateProductDto): Promise<string> {
    return this.productRepo.Create(req);
  }

  public async GetById(id: string): Promise<ProductBE> {
    return this.productRepo.GetById(id);
  }
  // @Get("/getAll")
  public async GetAll(name?: string, page: number = 1, pageSize: number = 10): Promise<ProductBE[]> {
    return this.productRepo.GetAll(name,page,pageSize);
  }
}
