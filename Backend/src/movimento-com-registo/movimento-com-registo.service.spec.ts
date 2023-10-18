import { Test, TestingModule } from '@nestjs/testing';
import { MovimentoComRegistoService } from './movimento-com-registo.service';

describe('MovimentoComRegistoService', () => {
  let service: MovimentoComRegistoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovimentoComRegistoService],
    }).compile();

    service = module.get<MovimentoComRegistoService>(MovimentoComRegistoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
