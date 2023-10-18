import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovimentoSemRegisto } from './Entity/movimento-sem-registo.entity';
import { CreateMovimentoSemRegistoDto } from './dto/create-Movimento-sem-registo.dto';
import { Repository } from 'typeorm';
import { ParqueService } from 'src/parque/parque.service';

@Injectable()
export class MovimentoSemRegistoService {
	//liga a classe parque do service para o controler
	constructor(
		@InjectRepository(MovimentoSemRegisto)
		private movimentoSemRegistoRepository: Repository<MovimentoSemRegisto>,
		private parqueService: ParqueService,
	) {}

	//Return: retorna um array de MovimentoSemRegisto
	findAll(): Promise<MovimentoSemRegisto[]> {
		return this.movimentoSemRegistoRepository.find();
	}

	//TODO: mudar aqui a funcao de create para entrada
	//Return: cria um parque na base de dados
	create(createMovimentoSemRegistoDto: CreateMovimentoSemRegistoDto) {
		//TODO: por aqui a verificação se o parque é publico ou n
		return this.movimentoSemRegistoRepository.save(
			createMovimentoSemRegistoDto,
		);
	}


	async entrada(createMovimentoSemRegistoDto: CreateMovimentoSemRegistoDto) {
		
		try {
				const tipoParque = await this.parqueService.parquePublico(
				 createMovimentoSemRegistoDto.ParqueID
				);
			
				//Parque Publico 
				if (tipoParque == 1) {
	
				 createMovimentoSemRegistoDto.DescMovimento = 'Entrada';
	
				 await this.movimentoSemRegistoRepository.save(
					 createMovimentoSemRegistoDto,
					);
					await this.parqueService.parqueEntrada(createMovimentoSemRegistoDto.ParqueID);
				 return 'Entrada Com Sucesso';
				}
	
			 //Parque Privado
	
			 else {
				 return 'Parque Privado, Nao tens acesso.'
				}		
		} catch (error) {
			 throw new Error('Erro no MovimentoSemRegisto.Entrada()');
			}
	}

	async saida(createMovimentoSemRegistoDto: CreateMovimentoSemRegistoDto) {

		try{
			
			 createMovimentoSemRegistoDto.DescMovimento = 'saida';

			 await this.movimentoSemRegistoRepository.save(
				 createMovimentoSemRegistoDto,
			 	);
				await this.parqueService.parqueSaida(createMovimentoSemRegistoDto.ParqueID);
			 return 'Saida com Sucesso';

		}catch (error) {
			 throw new Error('Erro no MovimentoSemRegisto.Saida()');
			}
	}
}
