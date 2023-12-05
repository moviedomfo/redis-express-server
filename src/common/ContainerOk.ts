
import { createContainer, asClass, InjectionMode } from "awilix";
import ListController from "../infra/controllers/List.controller";
import StringController from "../infra/controllers/String.controller";
import ListService from "../application/List.service";
import ListRepository from "../infra/repos/ListRedis.repo";
import StringCacheRepo from "../infra/repos/StringCache.repo";
import StringService from "../application/String.service";
import SecuritySettingsController from "@infra/controllers/securitySettings.controller";
import HashesRepo from "@infra/repos/Hashes.repo";
import HashesController from "@infra/controllers/Hashes.controller";
import HashesService from "@application/Hashes.service";
import PelsoftService from "@application/Pelsoft.service";
import PelsoftController from "@infra/controllers/Pelsoft.controller";
import PelsoftCacheRepo from "@infra/repos/PelsoftCache.repo";
/**
 * Dependency Injection (DI) Container implemented with awilix
 */
const Container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

Container.register({
  listRepository: asClass(ListRepository).scoped(),
  listService: asClass(ListService).scoped(),
  listController: asClass(ListController).scoped(),
  stringService: asClass(StringService).scoped(),
  stringController: asClass(StringController).scoped(),
  stringRepo: asClass(StringCacheRepo).scoped(),
  pelsoftRepo: asClass(PelsoftCacheRepo).scoped(),

  hashesService: asClass(HashesService).scoped(),
  hashesController: asClass(HashesController).scoped(),
  hashesRepo: asClass(HashesRepo).scoped(),

  securitySettingsController: asClass(SecuritySettingsController).scoped(),

  pelsoftService: asClass(PelsoftService).scoped(),
  pelsoftController: asClass(PelsoftController).scoped(),

});

export const hashesRepo = Container.resolve("hashesRepo");
export const hashesController = Container.resolve("hashesController");
export const hashesService = Container.resolve("hashesService");

export const pelsoftRepo = Container.resolve("pelsoftRepo");
export const stringRepo = Container.resolve("stringRepo");
export const stringController = Container.resolve("stringController");
export const stringService = Container.resolve("stringService");


export const listRepository = Container.resolve("listRepository");
export const listService = Container.resolve("listService");
export const listController = Container.resolve("listController");
export const pelsoftController = Container.resolve("pelsoftController");
export const pelsoftService = Container.resolve("pelsoftService");

export default Container;
