// filtro do body
import { IsInt, IsString } from 'class-validator';
import { Entity } from 'typeorm';

export class CreateUserDto {
  @IsString()
  Nome: string;

  @IsString()
  Rua: string;

  @IsInt()
  NivelPermissao: number;

  @IsInt()
  LoginID: number;
}
