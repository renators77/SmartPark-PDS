import { IsInt, IsString } from 'class-validator';

export class RemoveVeiculoDto {
  

  @IsString()
  ValorMatricula: string;

  @IsInt()
  UserID: number;
}
