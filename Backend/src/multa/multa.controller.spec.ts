import { Test, TestingModule } from '@nestjs/testing';
import { MultaController } from './multa.controller';
import { MultaService } from './multa.service';
import { CreateMultaDto } from './dto/Createmulta.dto';
import { ReservaService } from 'src/reserva/reserva.service';

describe('MultaController', () => {
  let controller: MultaController;
  let service: MultaService;

  const mockMultaController = {
    applyMulta: jest.fn().mockImplementation((CreateMultaDto: any) => {
      return{...CreateMultaDto };
    }),
  };

  const mockReservaService = {
    createReserva: jest.fn().mockImplementation((createReservaDto) => {
      return { ...createReservaDto };
    }),
    };


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultaController],
      providers: [
        MultaService,
        {provide: ReservaService, useValue: mockReservaService },
      ],
    })
    .overrideProvider(MultaService)
    .useValue(mockMultaController)
    .compile();

    controller = module.get<MultaController>(MultaController);
    service = module.get<MultaService>(MultaService);
  });

  it('should create a new Multa', () => {
    expect(
      controller.getUserMultas
      ).toEqual();
  });
});
