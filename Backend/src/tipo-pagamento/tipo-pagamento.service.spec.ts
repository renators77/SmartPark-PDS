import { Test, TestingModule } from '@nestjs/testing';
import { TipoPagamentoService } from './tipo-pagamento.service';

describe('TipoPagamentoService', () => {
  let service: TipoPagamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoPagamentoService],
    }).compile();

    service = module.get<TipoPagamentoService>(TipoPagamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
