import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserva } from './Entity/reserva.entity';
import { IsNull, LessThanOrEqual, Like, Not, Repository } from 'typeorm';
import { CreateReservaDto } from './dto/create-reserva.dto';

@Injectable()
export class ReservaService {
	find(arg0: { where: { LoginId: number; MultaId: import('typeorm').FindOperator<any> } }) {
		throw new Error('Method not implemented.');
	}
	constructor(
		@InjectRepository(Reserva)
		private reservaRepository: Repository<Reserva>,
	) {}

	getAllReservas() {
		return this.reservaRepository.find();
	}

	//cria e atribui uma reserva
	async createReserva(createReservaDto: CreateReservaDto) {
		try {
			//valor a pagar por minuto
			const valorPorMinuto = 0.02;
			//TODO: verificar se já nao tem reservas para as datas estabelecidas
			//TODO: por aqui verificações se a data fim nao esta atras da data inicio
			//processa as datas
			//BUG: guarda direito mas quando retiramos da BD retorna com menos uma hora
			const date1 = new Date(createReservaDto.DataInicio);
			const date2 = new Date(createReservaDto.DataFim);

			const diffInMs = date2.getTime() - date1.getTime();
			//diferenca em minutos
			const diffInMin = Math.floor(diffInMs / 60000);

			createReservaDto.ValorReserva = valorPorMinuto * diffInMin;

			await this.reservaRepository.save(createReservaDto);
			return await this.reservaRepository.save(createReservaDto);
		} catch (error) {
			throw new Error('Erro ao criar a reserva');
		}
	}

	//retorna as reservas de determinado user
	async getUserReservas(userID: number) {
		try {
			const reservas = await this.reservaRepository.find({
				where: { LoginId: userID },
			});

			if (!reservas) {
				throw new NotFoundException(`Este user UserID:${userID} não tem reservas`);
			}

			return await reservas;
		} catch (error) {
			throw new Error('Erro ao retornar as reservas!');
		}
	}

	//retorna as reservas de determinado user
	async getUserReservasValidas(userID: number) {
		try {
			const reservas = await this.reservaRepository.find({
				where: { LoginId: userID, EstadoReserva: 'Valida' },
			});

			if (!reservas) {
				throw new NotFoundException(`Este user UserID:${userID} não tem reservas`);
			}

			return reservas;
		} catch (error) {
			throw new Error('Erro ao retornar as reservas!');
		}
	}

	async getUserReservasEmUso(userID: number) {
		try {
			const reservas = await this.reservaRepository.findOne({
				where: { LoginId: userID, EstadoReserva: 'EmUso' },
			});

			if (!reservas) {
			}

			return reservas;
		} catch (error) {
			throw new NotFoundException(`Este user UserID:${userID} não tem reservas`);
		}
	}

	async utilizarReserva(userID: number) {
		try {
			const reserva = await this.reservaRepository.findOne({
				where: {
					LoginId: userID,
					EstadoReserva: 'Valida',
					DataInicio: LessThanOrEqual(new Date('2023-05-05T17:00:00.000Z')),
				},
			});

			if (!reserva) {
				throw new NotFoundException(`Este user UserID:${userID} não tem reservas`);
			}

			if (reserva && new Date() > reserva.DataInicio) {
				return reserva;
			} else {
				return 'ERROOO NESTA MERDA';
			}
		} catch (error) {
			throw new Error('Erro ao retornar as reservas!');
		}
	}

	//aceita o ultimo estado da reserva e passa o para o proximo estado
	async updateEstadoReserva(reservaID: number) {
		const reserva = await this.reservaRepository.findOne({
			where: { ReservaID: reservaID },
		});

		if (!reserva) {
			throw new NotFoundException(`Este Reserva Reservaid:${reservaID} existe`);
		}

		if (reserva.EstadoReserva == 'Invalida') reserva.EstadoReserva = 'Valida';
		else if (reserva.EstadoReserva == 'Valida') reserva.EstadoReserva = 'EmUso';
		else if (reserva.EstadoReserva == 'EmUso') reserva.EstadoReserva = 'Finalizada';
		else {
			return 'Reserva já foi Usada';
		}

		await this.reservaRepository.update(reservaID, reserva);
	}

	async getReservasComMultas(userID: number) {
		try {
			//no service das reservas acede  bd das reservas encontra as reservas com multas
			const multas = await this.reservaRepository.find({
				where: { LoginId: userID, MultaId: Not(IsNull()) },
			});
			return multas;
		} catch (error) {
			throw new Error('Erro ao retornar as Multas do User!');
		}
	}

	async applyMultaToReserva(multaID: number,reserva: Reserva) {
		try {
			//atribui a multa 
			reserva.MultaId=multaID;
			
			await this.reservaRepository.update(reserva.ReservaID,reserva);

		} catch (error) {
			throw new Error('Erro ao retornar as Multas do User!');
		}
	}
}
