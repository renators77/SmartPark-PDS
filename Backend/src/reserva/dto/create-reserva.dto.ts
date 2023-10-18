import {
	IsDate,
	IsDateString,
	IsInt,
	IsNumber,
	IsString,
} from 'class-validator';

export class CreateReservaDto {
	@IsDateString()
	DataInicio: string;

	@IsDateString()
	DataFim: string;

	@IsNumber()
	LoginId: number;

	@IsNumber()
	ParqueID: number;

	@IsString()
	EstadoReserva: string;

	@IsInt()
	VeiculoID: number;

	ValorReserva: any;
	DataPagamento: any;
	MultaId: any;
}
