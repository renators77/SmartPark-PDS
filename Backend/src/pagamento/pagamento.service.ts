/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagamento } from './Entity/pagamento.entity';
import { Repository } from 'typeorm';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { findPagamentosReserva } from './dto/find-pagamento-reserva.dto';

@Injectable()
export class PagamentoService {
	//liga a classe Pagamento do service para o controler
	constructor(
		@InjectRepository(Pagamento)
		private pagamentoRepository: Repository<Pagamento>,
	) {}

	//Return: retorna um array de Pagamentos
	findAll(): Promise<Pagamento[]> {
		return this.pagamentoRepository.find();
	}

	//Return: cria um Pagamento na base de dados
	async createPagamento(createPagamentoDto: CreatePagamentoDto): Promise<Pagamento> {
		//temos de por await na função para acabar de fazer o trycatch para tentar apanhar o erro
		return await this.pagamentoRepository.save(createPagamentoDto);
		try {
		} catch (error) {
			// Check if the error is related to the foreign key constraint
			if (error.errno === 1452) {
				// Customize the error message
				throw new Error('Impossivel generar o Pagamento. Tipo Pagamento Invalido');
			} else {
				console.error('Ocorreu um erro:', error);
				throw new Error('Impossivel generar Pagamento');
			}
		}
	}

  //faz o pagamento da multa  
	async createPagamentoMulta(reservaID: number, valorMulta: number) {
		//temos de por await na função para acabar de fazer o trycatch para tentar apanhar o erro
		var pagamento: CreatePagamentoDto;
		pagamento.DataPagamento = new Date();
		pagamento.ReservaID = reservaID;
		pagamento.TPagamentoID = 1;

		try {
			await this.pagamentoRepository.save(pagamento);
			
		} catch (error) {
			// Check if the error is related to the foreign key constraint
			if (error.errno === 1452) {
				// Customize the error message
				throw new Error('Impossivel generar o Pagamento. Tipo Pagamento Invalido');
			} else {
				console.error('Ocorreu um erro:', error);
				throw new Error('Impossivel generar Pagamento');
			}
		}
	}

	async findPagamentosReserva(reservaID: findPagamentosReserva) {
		try {
			//Encontrar todos os pagamentos associados a uma ReservaID
			const pagamentos = await this.pagamentoRepository.find({
				where: { ReservaID: reservaID.ReservaID },
			});

			if (!pagamentos) {
				throw new NotFoundException(`Não existe esta Reserva: ${reservaID.ReservaID}`);
			}

			return pagamentos;
		} catch (error) {
			console.error('Ocorreu um Erro:', error);
			throw new Error('Nao existe Pagamento');
		}
	}

	//TODO: fazerpagamento
	//TODO: fazer função quando for pagar, dar update ao pagamento e mudar o estado da reserva que foi paga para "Valida"
}
