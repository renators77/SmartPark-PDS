import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TipoparqueService } from './tipoparque.service';
import { CreateTipoParqueDto } from './dto/create-tipoparque.dto';

@Controller('tipoparque')
export class TipoparqueController {
  constructor(private tipoParqueService: TipoparqueService) {}

  //PROTOCOL: Get
  //ROTA: /tipoparque
  //DESC: Amostra todos os tipos de parque
  //funcao do tipo Promise array de tipo de parque
  @Get()
  getAllTipoParques(){
    //vai buscar a funcao ao service
    return this.tipoParqueService.findAll();
  }

  //PROTOCOL: Post
  //ROTA: /tipoparque
  //DESC: cria um tipoparque
  @Post()
  store(@Body() createTipoParqueDto: CreateTipoParqueDto) {
    return this.tipoParqueService.create(createTipoParqueDto);
  }

  //PROTOCOL: Delete
  //Rota: /tipoparque/:tipoparqueId
  //Desc: faz o remover do tipo de parque
  //Return: nada
  //passa o tipo de parque id como parametro
  @Delete('/:tipoparqueId')
  remove(@Param('tipoparqueId', ParseIntPipe) TPID: number) {
    return this.tipoParqueService.removeTipoParque(TPID);
  }
}
