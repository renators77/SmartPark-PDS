import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovimentoSemRegistoService } from './movimento-sem-registo.service';
import { CreateMovimentoSemRegistoDto } from './dto/create-Movimento-sem-registo.dto';

@Controller('movimento-sem-registo')
export class MovimentoSemRegistoController {
	//cria o construtor para podermos usar o parque.service
	constructor(
		private movimentoSemRegistoService: MovimentoSemRegistoService,
	) {}

	//PROTOCOL: Get
	//ROTA: /movimento-sem-registo
	//DESC: Amostra todos os Movimentos Sem Registo
	//funcao do tipo Promise array de movimentos sem registo
	@Get()
	getAllMovimentoSemRegisto() {
		//vai buscar a funcao ao service
		return this.movimentoSemRegistoService.findAll();
	}

	//PROTOCOL: Post
	//ROTA: /movimento-sem-registo
	//DESC: cria um MovimentoSemRegisto de entrada
	@Post('/entrada')
	entrada(
		@Body() createMovimentoSemRegistoDto: CreateMovimentoSemRegistoDto,
	) {
		return this.movimentoSemRegistoService.entrada(
			createMovimentoSemRegistoDto,
		);
	}

	//PROTOCOL: Post
	//ROTA: /movimento-sem-registo
	//DESC: cria um MovimentoSemRegisto
	@Post('/saida')
	saida(@Body() createMovimentoSemRegistoDto: CreateMovimentoSemRegistoDto) {
		return this.movimentoSemRegistoService.saida(
			createMovimentoSemRegistoDto,
		);
	}
}
