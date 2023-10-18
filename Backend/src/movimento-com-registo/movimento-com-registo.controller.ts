import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovimentoComRegistoService } from './movimento-com-registo.service';
import { CreateMovimentoComRegistoDto } from './dto/create-movimento-com-registo';

@Controller('movimento-com-registo')
export default class MovimentoComRegistoController {
	constructor(
		private movimentoComRegistoService: MovimentoComRegistoService,
	) {}

	@Get()
	getAllMovimentosComRegisto() {
		return this.movimentoComRegistoService.findAll();
	}

	@Post('/entrada')
	entradaMovimentosComRegisto(
		@Body() createMovimentoComRegisto: CreateMovimentoComRegistoDto,
	) {
		return this.movimentoComRegistoService.entrada(
			createMovimentoComRegisto,
		);
	}

	@Post('/saida')
	saidaMovimentosComRegisto(
		@Body() createMovimentoComRegisto: CreateMovimentoComRegistoDto,
	) {
		return this.movimentoComRegistoService.saida(createMovimentoComRegisto);
	}
}
