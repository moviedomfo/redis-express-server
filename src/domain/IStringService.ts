

export interface IStringService {
  Set: (key: string, value: string) => Promise<string>;
  Get: (key: string) => Promise<string>;
  Getset:(key: string, value: string) => Promise<string>;
  GetAll: () => Promise<string[]>;
  Del: (key:string) => Promise<number>;
}
