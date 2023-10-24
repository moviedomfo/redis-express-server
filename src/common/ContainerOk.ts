import {createContainer, asClass, InjectionMode} from "awilix";
import ListController from "../infra/controllers/List.controller";
import StringController from "../infra/controllers/String.controller";
import ListService from "../application/List.service";
import ListRepository from "../infra/repos/ListRedis.repo";
import StringnCacheRepo from "../infra/repos/StringCache.repo";
import StringService from "../application/String.service";
import SecuritySettingsController from "@infra/controllers/securitySettings.controller";
/**
 * Dependency Injection (DI) Container implemented with awilix
 */
const Container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

Container.register({
  listRepository: asClass(ListRepository).scoped(),

  stringService: asClass(StringService).scoped(),
  stringController: asClass(StringController).scoped(),
  listService: asClass(ListService).scoped(),
  listController: asClass(ListController).scoped(),
  stringRepo: asClass(StringnCacheRepo).scoped(),
  securitySettingsController: asClass(SecuritySettingsController).scoped(),
});

export const listService = Container.resolve("listService");
export const stringController = Container.resolve("stringController");
export const stringService = Container.resolve("stringService");
export const listController = Container.resolve("listController");
export const listRepository = Container.resolve("listRepository");
export const stringRepo = Container.resolve("stringRepo");

export default Container;
