import {createContainer, asClass, InjectionMode} from "awilix";
import ListController from "../infra/controllers/List.controller";
import ProductPubController from "../infra/controllers/ProductPub.controller";
import ListService from "../application/List.service";
import ListRepository from "../infra/repos/ListRedis.repo";
import CommonCache from "../infra/repos/CommonCache.repo";
import ProductService from "../application/Product.service";
import SecuritySettingsController from "@infra/controllers/securitySettings.controller";
/**
 * Dependency Injection (DI) Container implemented with awilix
 */
const Container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

Container.register({
  listRepository: asClass(ListRepository).scoped(),

  productService: asClass(ProductService).scoped(),
  productPubController: asClass(ProductPubController).scoped(),
  listService: asClass(ListService).scoped(),
  listController: asClass(ListController).scoped(),
  productRepo: asClass(CommonCache).scoped(),
  securitySettingsController: asClass(SecuritySettingsController).scoped(),
});

export const listService = Container.resolve("listService");
export const productPubController = Container.resolve("productPubController");
export const productService = Container.resolve("productService");
export const listController = Container.resolve("listController");
export const listRepository = Container.resolve("listRepository");
export const productRepo = Container.resolve("productRepo");

export default Container;
