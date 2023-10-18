import { Test, TestingModule } from '@nestjs/testing';
import { ParqueService } from './parque.service';

describe('ParqueService', () => {
  let service: ParqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParqueService],
    }).compile();

    service = module.get<ParqueService>(ParqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
