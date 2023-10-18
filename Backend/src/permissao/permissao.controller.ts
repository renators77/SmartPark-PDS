import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post  } from '@nestjs/common';
import { PermissaoService } from './permissao.service';
import { CreatePermissaoDto } from './dto/create-Permissao.dto';

@Controller('permissao')
export class PermissaoController {
    constructor(private permissaoService: PermissaoService) {}

  //PROTOCOL: Get
  //ROTA: /permissao
  //DESC: Amostra todas as permissoes
  //funcao do tipo Promise array de permissao
  @Get()
  getPermissao() {
    return this.permissaoService.findAll();
  }

  //PROTOCOL: Post
  //ROTA: /permissao
  //DESC: cria um user
  @Post()
  store(@Body() createPermissaoDto: CreatePermissaoDto) {
    return this.permissaoService.create(createPermissaoDto);
  }

  //PROTOCOL: Delete
  //Rota: /parque/:permissaoid
  //Desc: faz o remover do parque
  //Return: nada
  //passa o parque id como parametro
  @Delete('/:permissaoId')
  remove(@Param('permissaoId', ParseIntPipe) PermissaoID: number) {
    return this.permissaoService.removePermissao(PermissaoID);
  }
}
