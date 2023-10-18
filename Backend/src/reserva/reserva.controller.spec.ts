import { Test, TestingModule } from '@nestjs/testing';
import { ReservaController } from './reserva.controller';
import { ReservaService } from './reserva.service';

describe('ReservaController', () => {
  let controller: ReservaController;
  let service: ReservaService;

  const mockReservaController = {
    createReserva: jest.fn().mockImplementation((createReservaDto: any) => {
      return { ...createReservaDto };
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservaController],
      providers: [ReservaService],
    })
      .overrideProvider(ReservaService)
      .useValue(mockReservaController)
      .compile();

    controller = module.get<ReservaController>(ReservaController);
    service = module.get<ReservaService>(ReservaService);
  });

  
    it('should create a new reserva', () => {
      expect(
        controller.createReserva({
          DataInicio: '2023-05-06T12:25:00Z', 
          DataFim: '2023-05-07T20:45:00Z', 
          LoginId: 2, 
          ParqueID: 2, 
          VeiculoID: 5, 
          EstadoReserva: 'Valida',
          ValorReserva: undefined,
          DataPagamento: undefined,
          MultaId: undefined
        }),
      ).toEqual({
        DataInicio: ('2023-05-06T12:25:00Z'),
        DataFim: ('2023-05-07T20:45:00Z'),
        LoginId: 2,
        ParqueID: 2,
        VeiculoID: 5,
        EstadoReserva: 'Valida',
        ValorReserva: undefined,
        DataPagamento: undefined,
        MultaId: undefined
      });
    });

  });
