import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-User.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('user')
export class UserController {
  //cria o construtor para podermos usar o userservice
  constructor(private userService: UserService) {}

  //PROTOCOL: Get
  //ROTA: /user
  //DESC: Amostra todos os users
  //funcao do tipo Promise array de user
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAllUsers() {
    //vai buscar a funcao ao service
    return this.userService.findAll();
  }

  //PROTOCOL: Post
  //ROTA: /user
  //DESC: cria um user
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  //PROTOCOL: Patch
  //Rota: /user/:userid
  //Desc: faz update do user
  //Return:
  //passa o user id como parametro
  @Patch('/:userId')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateUserDto, userId);
  }


  //PROTOCOL: Delete
  //Rota: /user/:userid
  //Desc: faz o remover do user
  //Return: nada
  //passa o user id como parametro
  @Delete('/:userId')
  remove(@Param('userId', ParseIntPipe) userID: number) {
  return this.userService.removeUser(userID);
}
}
