import { Injectable, NotFoundException } from '@nestjs/common';
import { Parque } from './Entity/parque.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParqueDto } from './dto/create-Parque.dto';
import { UpdateParqueDto } from './dto/update-Parque.dto';

@Injectable()
export class ParqueService {
	//liga a classe parque do service para o controler
	constructor(
		@InjectRepository(Parque)
		private parquesRepository: Repository<Parque>,
	) {}

	//Return: retorna um array de Parques
	findAll(): Promise<Parque[]> {
		return this.parquesRepository.find();
	}

	//Return: cria um parque na base de dados
	create(createParqueDto: CreateParqueDto) {
		return this.parquesRepository.save(createParqueDto);
	}

	//Return: o parque alterado

	//desc:faz update ao numero de lugares e ao tipo dd Parque
	update(updateParqueDto: UpdateParqueDto, ParqueID: number): Promise<Parque> {
		//encontra parque igual
		const parqueToUpdated = this.parquesRepository.findOne({
			where: { ParqueID: ParqueID },
		});

		//verifica se existe
		if (!parqueToUpdated) {
			throw new NotFoundException(`Parque with ID ${ParqueID} not found`);
		}

		//faz update do parque
		this.parquesRepository.update(ParqueID, updateParqueDto);

		return this.parquesRepository.findOne({
			where: { ParqueID: ParqueID },
		});
	}

	async removeParque(ParqueID: number): Promise<void> {
		const parque = await this.parquesRepository.findOne({
			where: { ParqueID: ParqueID },
		});

		//verifica se existe
		if (!parque) {
			throw new NotFoundException(`Parque with ID ${ParqueID} not found`);
		}

		//faz remocao do parque
		await this.parquesRepository.remove(parque);
	}

	//retorna true se for publico, e false se for privado
	async parquePublico(parqueID: number) {
		const parque = await this.parquesRepository.findOne({
			where: { ParqueID: parqueID },
		});

		//verifica se existe
		if (!parque) {
			throw new NotFoundException(`Parque with ID ${parqueID} not found`);
		}

		//retorna
		if (parque.TPID == 1) return 1;
		else if (parque.TPID == 2) return 0;
	}

	async parqueEntrada(parqueID: number) {
		const parque = await this.parquesRepository.findOne({
			where: { ParqueID: parqueID },
		});

		//verifica se existe
		if (!parque) {
			throw new NotFoundException(`Parque with ID ${parqueID} not found`);
		}

		parque.LugaresDisponiveis -= 1;
		await this.parquesRepository.update(parque.ParqueID, parque);
		console.log('TIROU LUGAR');
	}

	async parqueSaida(parqueID: number) {
		const parque = await this.parquesRepository.findOne({
			where: { ParqueID: parqueID },
		});

		//verifica se existe
		if (!parque) {
			throw new NotFoundException(`Parque with ID ${parqueID} not found`);
		}

		parque.LugaresDisponiveis += 1;
		await this.parquesRepository.update(parque.ParqueID, parque);
		console.log('ADICIONOU LUGAR');
	}
}
