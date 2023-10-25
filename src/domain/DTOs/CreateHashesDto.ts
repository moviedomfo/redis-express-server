import { Person } from "./Person";

export class CreateHashesDto {
  
  public Key: string;
  public Field:string
  public Value: string;
  
}

export class CreateHashesPersonDto {
  
  public Key: string;
  
  public Value: Person;
  
}
