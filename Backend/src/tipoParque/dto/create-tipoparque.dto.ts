import { IsString } from 'class-validator';

export class CreateTipoParqueDto {
  @IsString()
  DescParque: string;
}
