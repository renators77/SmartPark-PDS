import { Test, TestingModule } from '@nestjs/testing';
import { PermissaoController } from './permissao.controller';

describe('PermissaoController', () => {
  let controller: PermissaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermissaoController],
    }).compile();

    controller = module.get<PermissaoController>(PermissaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
