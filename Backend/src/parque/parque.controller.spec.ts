import { Test, TestingModule } from '@nestjs/testing';
import { ParqueController } from './parque.controller';

describe('ParqueController', () => {
  let controller: ParqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParqueController],
    }).compile();

    controller = module.get<ParqueController>(ParqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
