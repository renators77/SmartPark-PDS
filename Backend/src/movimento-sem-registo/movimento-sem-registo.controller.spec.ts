import { Test, TestingModule } from '@nestjs/testing';
import { MovimentoSemRegistoController } from './movimento-sem-registo.controller';

describe('MovimentoSemRegistoController', () => {
  let controller: MovimentoSemRegistoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovimentoSemRegistoController],
    }).compile();

    controller = module.get<MovimentoSemRegistoController>(MovimentoSemRegistoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
