import { Injectable, NotFoundException } from '@nestjs/common';
import { Veiculo } from './Entity/veiculo.entity';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { RemoveVeiculoDto } from './dto/remove-veiculo.dto';
import { findUserVeiculos } from './dto/findUser-veiculos.dto';

@Injectable()
export class VeiculoService {
	constructor(
		@InjectRepository(Veiculo)
		private readonly veiculosRepository: Repository<Veiculo>,
	) {}

	findAll() {
		return this.veiculosRepository.find();
	}

	async findUserVeiculos(userID: findUserVeiculos) {
		try {
			// Find all veiculos associated with the given userId
			const veiculos = await this.veiculosRepository.find({
				where: { UserID: userID.UserID },
			});

			if (!veiculos) {
				throw new NotFoundException(
					`Não existe este user: ${userID.UserID} `,
				);
			}
			//return array of veiculos
			return veiculos;
		} catch (error) {
			console.error('An error occurred:', error);
			throw new Error('Failed to create veiculo');
		}
	}

	async linkVeiculo(createVeiculoDto: CreateVeiculoDto): Promise<Veiculo> {
		try {
			//temos de por await na função para acabar de fazer o trycatch para tentar apanhar o erro
			return await this.veiculosRepository.save(createVeiculoDto);
		} catch (error) {
			// Check if the error is related to the foreign key constraint
			if (error.errno === 1452) {
				// Customize the error message
				throw new Error('Failed to create veiculo. User not found.');
			} else {
				// Handle other errors
				console.error('An error occurred:', error);
				throw new Error('Failed to create veiculo');
			}
		}
	}

	async removeVeiculo(removeVeiculoDto: RemoveVeiculoDto): Promise<any> {
		try {
			const veiculoRemover = await this.veiculosRepository.findOne({
				where: {
					UserID: removeVeiculoDto.UserID,
					ValorMatricula: removeVeiculoDto.ValorMatricula,
				},
			});

			if (!veiculoRemover) {
				throw new NotFoundException(
					`Veiculo nao existe com este ID: ${removeVeiculoDto.UserID} `,
				);
			}

			await this.veiculosRepository.remove(veiculoRemover);
		} catch (error) {
			// Handle the error
			console.error('Ocorreu um erro ao remover um veiculo:', error);
			throw new Error('Failed to remove veiculo');
		}
	}

	//retorna o id do veiculo com a matricula que passamos
	async veiculoID(valorMatricula: string): Promise<number> {
		try {
			const veiculo = await this.veiculosRepository.findOne({
				where: { ValorMatricula: valorMatricula },
			});
			const veiculoID = veiculo.VeiculoID;
			return veiculoID;
		} catch (error) {
			// Handle the error

			throw new Error('Veiculo não encontrado');
		}
	}

	//retona o id do user do veiculo nos parametros
	async userIdOfVeiculo(veiculoID: number) {
		try {
			const user = await this.veiculosRepository.findOne({
				where: { VeiculoID: veiculoID },
			});

			if (!user) {
				throw new NotFoundException(
					`Veiculo nao existe com este ID: ${veiculoID} `,
				);
			}

			return await user.UserID;
		} catch (error) {
			// Handle the error

			throw new Error('Erro ao tentar retornar o userID do veiculo');
		}
	}
}
