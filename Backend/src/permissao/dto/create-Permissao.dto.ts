import { IsString } from 'class-validator';

export class CreatePermissaoDto {

  @IsString()
  PermissaoNome: string;

  @IsString()
  PermissaoDesc: string;
}
