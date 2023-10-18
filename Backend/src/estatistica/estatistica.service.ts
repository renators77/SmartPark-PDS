import { Injectable, NotFoundException } from '@nestjs/common';
import { MovimentoComRegistoService } from 'src/movimento-com-registo/movimento-com-registo.service';
import { MovimentoSemRegistoService } from 'src/movimento-sem-registo/movimento-sem-registo.service';
import { MultaService } from 'src/multa/multa.service';
import { ParqueService } from 'src/parque/parque.service';
import { ReservaService } from 'src/reserva/reserva.service';
import { UserService } from 'src/user/user.service';
import { VeiculoService } from 'src/veiculo/veiculo.service';

@Injectable()
export class EstatisticaService {
	constructor(
		private parqueService: ParqueService,
		private reservaService: ReservaService,
		private multaService: MultaService,
		private userService: UserService,
		private veiculoService: VeiculoService,
		private movimentoComRegistoService: MovimentoComRegistoService,
		private movimentoSemRegistoService: MovimentoSemRegistoService,
	) {}

	async numberOfUsers() {
		try {
			const sizeUsers = await this.userService.findAll();
			return sizeUsers.length;
		} catch (error) {
			throw new NotFoundException(`Error retrivng number of users! ${error}`);
		}
	}

	async numberOfReservas() {
		try {
			const sizeReservas = await this.reservaService.getAllReservas();
			return sizeReservas.length;
		} catch (error) {
			throw new NotFoundException(`Erro ao tentar ir buscar o numero de reservas! ${error}`);
		}
	}

	async numberOfMultas() {
		try {
			const sizeMultas = await this.multaService.GetAllMultas();
			return sizeMultas.length;
		} catch (error) {
			throw new NotFoundException(`Erro ao tentar ir buscar o numero de multas! ${error}`);
		}
	}

	async numberOfMovimentos() {
		try {
			const sizeMovimentoComReserva = await this.movimentoComRegistoService.findAll();
			const sizeMovimentoSemReserva = await this.movimentoSemRegistoService.findAll();

			return sizeMovimentoComReserva.length + sizeMovimentoSemReserva.length;
		} catch (error) {
			throw new NotFoundException(`Erro ao tentar ir buscar o numero de movimentos! ${error}`);
		}
	}

	async ocupationParque() {
		try {
			const parques = await this.parqueService.findAll();

			return parques;
		} catch (error) {
			throw new NotFoundException(`Erro ao tentar ir buscar ocupação de parque! ${error}`);
		}
	}

	async numberOfVeiculos() {
		try {
			const sizeVeiculos = await this.veiculoService.findAll();
			return sizeVeiculos.length;
		} catch (error) {
			throw new NotFoundException(`Error retrivng number of Veiculos! ${error}`);
		}
	}
}
