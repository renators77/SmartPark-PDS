import { Test, TestingModule } from '@nestjs/testing';
import { TipoparqueService } from './tipoparque.service';

describe('TipoparqueService', () => {
  let service: TipoparqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoparqueService],
    }).compile();

    service = module.get<TipoparqueService>(TipoparqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
