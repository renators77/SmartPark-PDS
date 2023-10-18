import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  var mockUserController = {
    create: jest.fn((dto) => {
      return { ...dto };
    }),

    update: jest.fn().mockImplementation((dto, id) => {
      return { ...dto, id };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserController)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  // test para create
  it('should create a user', () => {
    expect(
      controller.create({ Nome: 'test', Rua: 'test', NivelPermissao: 1 }),
    ).toEqual({
      Nome: 'test',
      Rua: 'test',
      NivelPermissao: 1,
    });
  });

  //teste da rota update
  it('should update a user', () => {
    const dto = {
      Nome: 'test2',
      Rua: 'test2',
      NivelPermissao: 1,
    };
    expect(controller.update(dto, 1)).toEqual({
      ...dto,
      id: 1,
    });
  });
});
