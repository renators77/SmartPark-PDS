import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovimentoComRegistoDto } from './dto/create-movimento-com-registo';

import { MovimentoComRegisto } from './Entity/movimento-com-registo.entity';


import { MultaService } from 'src/multa/multa.service';
import { VeiculoService } from 'src/veiculo/veiculo.service';
import { ParqueService } from 'src/parque/parque.service';
import { ReservaService } from 'src/reserva/reserva.service';



@Injectable()
export class MovimentoComRegistoService {
	constructor(
		@InjectRepository(MovimentoComRegisto)
		private movimentoComRegistoRepository: Repository<MovimentoComRegisto>,
		private veiculoService: VeiculoService,
		private parqueService: ParqueService,
		private reservaService: ReservaService,
		private multaService: MultaService,
	) {}
	async findAll() {
		return await this.movimentoComRegistoRepository.find();
	}

	async entrada(createMovimentoComRegisto: CreateMovimentoComRegistoDto) {

		const tipoParque = await this.parqueService.parquePublico(createMovimentoComRegisto.ParqueID);
		const veiculoid = await this.veiculoService.veiculoID(createMovimentoComRegisto.ValorMatricula);
		const userID = await this.veiculoService.userIdOfVeiculo(veiculoid);

		//parque publico
		if (tipoParque == 1) {
			const veiculoId = await this.veiculoService.veiculoID(createMovimentoComRegisto.ValorMatricula);

			createMovimentoComRegisto.VeiculoID = veiculoId;
			createMovimentoComRegisto.DescMovimento = 'Entrada';

			await this.movimentoComRegistoRepository.save(createMovimentoComRegisto);
			return 'Entrada com sucesso';
		}
		//parque privado
		else {
			//vai buscar o id do carro
			const veiculoId = await this.veiculoService.veiculoID(createMovimentoComRegisto.ValorMatricula);
			createMovimentoComRegisto.VeiculoID = veiculoId;
			createMovimentoComRegisto.DescMovimento = 'Entrada';

			const reservas = await this.reservaService.getUserReservasValidas(userID);

			if (!reservas) {
				throw new NotFoundException(`Reservas with userID ${userID} not found`);
			}

			for (const reserva of reservas) {
				// da update as datas e adiciona uma hora
				const dateInicio = reserva.DataInicio;
				const updatedDateInicio = new Date(dateInicio.getTime() + 60 * 60 * 1000); // Add one hour
				const dateFim = reserva.DataFim;
				const updatedDateFim = new Date(dateFim.getTime() + 60 * 60 * 1000); // Add one hour

				//DEBUG
				// console.log('reserva id', reserva.ReservaID);
				// console.log('DataInicio : ', updatedDateInicio);
				// console.log('createMovimentoComRegistoDataMovimento : ', createMovimentoComRegisto.DataMovimento);
				// console.log('DataFim : ', updatedDateFim);

				//transforma em data
				const dataMovimento = new Date(createMovimentoComRegisto.DataMovimento);

				if (
					dataMovimento.getDate() >= updatedDateInicio.getDate() &&
					dataMovimento.getDate() <= updatedDateFim.getDate()
				) {
					console.log('Entrou');

					if (reserva.ParqueID == createMovimentoComRegisto.ParqueID) {
						await this.parqueService.parqueEntrada(createMovimentoComRegisto.ParqueID);
						await this.reservaService.updateEstadoReserva(reserva.ReservaID);
						
						await this.movimentoComRegistoRepository.save(createMovimentoComRegisto);
						return 'Entrada Com Sucesso';
					} else {
						return 'Não tem reserva para este parque';
					}
				}
			}

			
			return 'Entrada Sem Sucesso';
		}

		// try {
		// } catch (error) {
		// 	throw new Error('Erro no MovimentoComRegisto.Entrada()');
		// }
	}

	async saida(createMovimentoComRegisto: CreateMovimentoComRegistoDto) {
		const veiculoId = await this.veiculoService.veiculoID(createMovimentoComRegisto.ValorMatricula);
		const userID = await this.veiculoService.userIdOfVeiculo(veiculoId);

		createMovimentoComRegisto.VeiculoID = veiculoId;
		createMovimentoComRegisto.DescMovimento = 'Saida';

		const reserva = await this.reservaService.getUserReservasEmUso(userID);

		if (!reserva) {
			throw new NotFoundException(`Reservas with userID ${userID} Não foi incializada (entrou a sucapa)`);
		}

		const dataMov = new Date(createMovimentoComRegisto.DataMovimento);

		//regra para multas
		const checkMulta = await this.multaService.checkIfMulta(dataMov, reserva);

		if (checkMulta) {
			//por aqui para aplicar um novo pagamento para a coima e aplicar multa na reserva
			const multaid = await this.multaService.applyMulta(reserva, dataMov);
			reserva.MultaId = multaid;

			// aplicar aqui update a reserva e pegar no id da multa e passar para reserva.multaid
			await this.reservaService.applyMultaToReserva(multaid,reserva);
			//update o estado da reserva
			await this.reservaService.updateEstadoReserva(reserva.ReservaID);
			//update ao parque
			await this.parqueService.parqueSaida(createMovimentoComRegisto.ParqueID);
			//adiciona na base de dados
			await this.movimentoComRegistoRepository.save(createMovimentoComRegisto);
			return 'Saida com Sucesso e com MULTA PEGA LA PANE';
		}

		//update o estado da reserva
		await this.reservaService.updateEstadoReserva(reserva.ReservaID);
		//update ao parque
		await this.parqueService.parqueSaida(createMovimentoComRegisto.ParqueID);
		//adiciona na base de dados 
		await this.movimentoComRegistoRepository.save(createMovimentoComRegisto);


		return 'Saida com sucesso sem multa ';

		try {
		} catch (error) {
			throw new Error('Erro no MovimentoComRegisto.Saida()');
		}
	}
}
