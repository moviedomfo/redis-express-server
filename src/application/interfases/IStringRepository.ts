export interface IStringRepository {
  Set: (key: string, value: string) => Promise<string>;
  Get: (key: string) => Promise<string>;
  GetAll: () => Promise<string[]>;
}