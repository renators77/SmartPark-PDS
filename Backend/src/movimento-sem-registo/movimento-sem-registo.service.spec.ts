import { Test, TestingModule } from '@nestjs/testing';
import { MovimentoSemRegistoService } from './movimento-sem-registo.service';

describe('MovimentoSemRegistoService', () => {
  let service: MovimentoSemRegistoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovimentoSemRegistoService],
    }).compile();

    service = module.get<MovimentoSemRegistoService>(MovimentoSemRegistoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
