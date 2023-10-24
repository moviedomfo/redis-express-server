export interface IHashesRepository {
  Set: (key: string, field: string, value: string) => Promise<string>;
  Get: (key: string, field: string) => Promise<string>;
}
