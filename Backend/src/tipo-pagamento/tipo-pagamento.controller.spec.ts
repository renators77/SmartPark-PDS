import { Test, TestingModule } from '@nestjs/testing';
import { TipoPagamentoController } from './tipo-pagamento.controller';

describe('TipoPagamentoController', () => {
  let controller: TipoPagamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoPagamentoController],
    }).compile();

    controller = module.get<TipoPagamentoController>(TipoPagamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
