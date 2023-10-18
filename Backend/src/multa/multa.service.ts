import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Multa } from './Entity/multa.entity';
import { IsNull, Not, Repository } from 'typeorm';

import { ReservaService } from 'src/reserva/reserva.service';
import { Reserva } from 'src/reserva/Entity/reserva.entity';
import { CreateMultaDto } from './dto/Createmulta.dto';


@Injectable()
export class MultaService {
	//liga a classe Multa do service para o controller
	constructor(
		@InjectRepository(Multa)
		private multaRepository: Repository<Multa>,
		private reservaService: ReservaService,
	) {}

	GetAllMultas(): Promise<Multa[]> {
		return this.multaRepository.find();
	}

	async getUserMulta(userID: number) {
		try {
			//vai buscar ao service das reservas
			const multas = await this.reservaService.getReservasComMultas(userID);
			return multas;
		} catch (error) {
			throw new Error('Erro ao retornar as Multas do User!');
		}
	}

	async checkIfMulta(dataMov: Date, reserva: Reserva): Promise<Boolean> {
		// da update as datas e adiciona uma hora
		const dateFim = reserva.DataFim;
		const updatedDateFim = new Date(dateFim.getTime() + 60 * 60 * 1000); // Add one hour

		//DEBUG
		// console.log('Datamovimento checkif multa : ', dataMov);
		// console.log('Data no checkif multa : ', updatedDateFim);

		if (dataMov > updatedDateFim) return true;
		else return false;
	}

	//aplica a multa a reserva e cria pagamento
	async applyMulta(reserva: Reserva, dateMov: Date) {
		var multa: CreateMultaDto = new CreateMultaDto();
		multa.DataMulta = new Date();

		// Add one hour to reserva.DataFim
		const dataFimWithAddedHour = new Date(reserva.DataFim);
		dataFimWithAddedHour.setHours(dataFimWithAddedHour.getHours() + 1);
	  

		//adiciona o valor e passa para minutos o tempo da multa
		const diffInMilliseconds = dateMov.getTime() - dataFimWithAddedHour.getTime();
		const diffInSeconds = diffInMilliseconds / 1000;
		const tempoMultaInMinutes = diffInSeconds / 60;
		multa.ValorMulta = tempoMultaInMinutes * 0.05;
		multa.DuracaoMulta = tempoMultaInMinutes;

		//vai buscar i q inseriu na bd
		const multadb = await this.multaRepository.save(multa);
		
		return multadb.MultaId;
	}
}
