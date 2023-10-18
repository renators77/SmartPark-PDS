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

import { ParqueService } from './parque.service';
import { UpdateParqueDto } from './dto/update-Parque.dto';
import { CreateParqueDto } from './dto/create-Parque.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('parque')
export class ParqueController {
  //cria o construtor para podermos usar o parque.service
  constructor(private parqueService: ParqueService) {}

  //PROTOCOL: Get
  //ROTA: /parque
  //DESC: Amostra todos os parques
  //funcao do tipo Promise array de parque
  @Get()
  getAllParques() {
    //vai buscar a funcao ao service
    return this.parqueService.findAll();
  }

  //PROTOCOL: Post
  //ROTA: /parque
  //DESC: cria um parque
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createParqueDto: CreateParqueDto) {
    return this.parqueService.create(createParqueDto);
  }

  //PROTOCOL: Patch
  //Rota: /parque/:parqueid
  //Desc: faz update do parque
  //Return:
  //passa o parque id como parametro
  @Patch('/:parqueId')
  update(
    @Body() updateParqueDto: UpdateParqueDto,
    @Param('parqueId', ParseIntPipe) ParqueId: number,
  ) {
    return this.parqueService.update(updateParqueDto, ParqueId);
  }

  //PROTOCOL: Delete
  //Rota: /parque/:parqueid
  //Desc: faz o remover do parque
  //Return: nada
  //passa o parque id como parametro
  @Delete('/:parqueId')
  remove(@Param('parqueId', ParseIntPipe) ParqueID: number) {
    return this.parqueService.removeParque(ParqueID);
  }
}
