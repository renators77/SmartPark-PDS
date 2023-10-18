import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateMultaDto {
	@IsNumber()
	ValorMulta: number;

	@IsDateString()
	DataMulta: Date;

	@IsString()
	DuracaoMulta: number;
}
