import { IsInt } from 'class-validator';

export class findUserVeiculos {
  @IsInt()
  UserID: number;
}
