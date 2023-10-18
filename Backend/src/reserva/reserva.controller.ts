import {
	Body,
	Controller,
	Get,
	Param,
	ParseIntPipe,
	Post,
} from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { CreateReservaDto } from './dto/create-reserva.dto';

@Controller('reserva')
export class ReservaController {
	constructor(private readonly reservaService: ReservaService) {}

	@Get()
	getAllReservas() {
		return this.reservaService.getAllReservas();
	}

	@Post()
	createReserva(@Body() createReservaDto: CreateReservaDto) {
		return this.reservaService.createReserva(createReservaDto);
	}

	@Get('/:LoginID')
	getUserReservas(@Param('LoginID', ParseIntPipe) loginID: number) {
		return this.reservaService.getUserReservas(loginID);
	}
	//TODO:remover isto mais tarde (SO PARA TESTE)
	@Get('/validas/:LoginID')
	getUserReservasValidas(@Param('LoginID', ParseIntPipe) loginID: number) {
		return this.reservaService.getUserReservasValidas(loginID);
	}
	//TODO:remover isto mais tarde (SO PARA TESTE)
	@Get('/emuso/:LoginID')
	getUserReservasEmUso(@Param('LoginID', ParseIntPipe) loginID: number) {
		return this.reservaService.getUserReservasEmUso(loginID);
	}
	//TODO: remover isto mais tarde (SO PARA TESTE)
	@Get('/utilizar/:LoginID')
	utilizarReserva(@Param('LoginID', ParseIntPipe) loginID: number) {
		return this.reservaService.getUserReservasValidas(loginID);
	}
}
