import { Person } from './DTOs/Person';
export interface IHashesService {
  Set: (key: string, field: string, value: string) => Promise<string>;
  Get: (key: string, field: string) => Promise<string>;
  SetObj: (key: string, value: Person) => Promise<string>;
  GetObj: (key: string) => Promise<Person>;
  // GetAll: () => Promise<string[]>;
}
