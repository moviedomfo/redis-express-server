import { Person } from "@domain/DTOs/Person";

export interface IHashesRepository {
  Set: (key: string, field: string, value: string) => Promise<string>;
  SetObj: (key: string, value: Person) => Promise<string>;
  GetObj: (key: string) => Promise<Person>;
  Get: (key: string, field: string) => Promise<string>;
}
