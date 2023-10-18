import { IsInt, IsString } from 'class-validator';

export class CreateLoginDto {
  @IsString()
  LoginUsername: string;
  
  @IsString()
  LoginPassword: string;

  @IsInt()
  PermissaoID: number;
}
