import { Test, TestingModule } from '@nestjs/testing';
import MovimentoComRegistoController from './movimento-com-registo.controller';
import { MovimentoComRegistoService } from './movimento-com-registo.service';
import { VeiculoService } from '../../src/veiculo/veiculo.service';
import { ParqueService } from '../../src/parque/parque.service';
import { ReservaService } from '../../src/reserva/reserva.service';
import { MultaService } from '../../src/multa/multa.service';


describe('MovimentoComRegistoController', () => {
  let controller: MovimentoComRegistoController;
  let service: MovimentoComRegistoService;

  const mockMovimentoComRegistoController = {
    entrada: jest.fn().mockImplementation((createMovimentoComRegistoDto: any) => {
      return { ...createMovimentoComRegistoDto };
    }),
  };

  const mockVeiculoService = {
	linkVeiculo: jest.fn().mockImplementation((createVeiculoDto) => {
		return { ...createVeiculoDto};
	}),
  };
  
  const mockParqueService = {
	create: jest.fn().mockImplementation((createParqueDto) => {
		return { ...createParqueDto};
	}),
  };
  
  const mockReservaService = {
	createReserva: jest.fn().mockImplementation((createReservaDto) => {
		return { ...createReservaDto};
	}),
  };
  
  const mockMultaService = {
	applyMulta: jest.fn().mockImplementation((CreateMultaDto) => {
		return { ...CreateMultaDto};
	}),
  };

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [MovimentoComRegistoController],
			providers: [
				MovimentoComRegistoService,
				{ provide: VeiculoService, useValue: mockVeiculoService },
				{ provide: ParqueService, useValue: mockParqueService },
				{ provide: ReservaService, useValue: mockReservaService },
				{ provide: MultaService, useValue: mockMultaService },
			  ],
		})
		.overrideProvider(MovimentoComRegistoService)
		.useValue(mockMovimentoComRegistoController)
		.compile();

		controller = module.get<MovimentoComRegistoController>(MovimentoComRegistoController);
		service = module.get<MovimentoComRegistoService>(MovimentoComRegistoService);
	});

	it('should create a new Entrada', () => {
		expect(
			controller.entradaMovimentosComRegisto({
				ValorMatricula: '12-QH-12',
				DataMovimento: new Date('2023-05-24T15:00:00.00Z'),
				ParqueID: 2,
				DescMovimento: 'entrada',
				VeiculoID: 1
			}),
		).toEqual({
			ValorMatricula: '12-QH-12',
			DataMovimento: new Date('2023-05-24T15:00:00.00Z'),
			ParqueID: 2,
			DescMovimento: 'entrada',
			VeiculoID: 1
		});
	});
});
