import { Test, TestingModule } from '@nestjs/testing';
import { TipoparqueController } from './tipoparque.controller';

describe('TipoparqueController', () => {
  let controller: TipoparqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoparqueController],
    }).compile();

    controller = module.get<TipoparqueController>(TipoparqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
