import { IsInt, IsString } from 'class-validator';


export class CreateVeiculoDto {
  

  @IsString()
  ValorMatricula: string;

  @IsInt()
  UserID: number;
}
