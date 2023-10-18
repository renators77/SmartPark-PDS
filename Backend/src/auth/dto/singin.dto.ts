import { IsInt, IsString } from 'class-validator';

export class SinginDto {
  @IsString()
  LoginUsername: string;
  
  @IsString()
  LoginPassword: string;

}
