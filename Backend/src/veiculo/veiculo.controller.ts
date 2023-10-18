import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { create } from 'domain';
import { RemoveVeiculoDto } from './dto/remove-veiculo.dto';
import { findUserVeiculos } from './dto/findUser-veiculos.dto';

@Controller('veiculo')
export class VeiculoController {
  constructor(private veiculoService: VeiculoService) {}

  //PROTOCOL: Get
  //ROTA: /veiculo
  //DESC: Amostra todos os veiculos
  //funcao do tipo Promise array de veiculos
  @Get()
  getVeiculos() {
    return this.veiculoService.findAll();
  }

  //PROTOCOL: Post
  //ROTA: /veiculo/findUserVeiculos
  //DESC: amostra todos os carros do user
  //retorna array de veiculso do user
  @Post('/findUserVeiculos')
  findUserVeiculos(@Body() userID: findUserVeiculos) {
    return this.veiculoService.findUserVeiculos(userID);
  }

  //PROTOCOL: Post
  //ROTA: /veiculo/create
  //DESC:cria veiculo a determinado user
  //retorna o veiculo criado
  @Post('/create')
  linkVeiculo(@Body() createVeiculoDto: CreateVeiculoDto) {
    return this.veiculoService.linkVeiculo(createVeiculoDto);
  }

  //PROTOCOL: Delete
  //ROTA: /veiculo
  //DESC: remove veiculo de determinado user
  //
  @Delete('/remove')
  removeVeiculo(@Body() removeVeiculoDto: RemoveVeiculoDto) {
    return this.veiculoService.removeVeiculo(removeVeiculoDto);
  }
}
