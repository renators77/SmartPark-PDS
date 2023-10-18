import { IsInt } from 'class-validator';

export class findPagamentosReserva {
  @IsInt()
  ReservaID: number;
}