import { Controller, Get, UseGuards } from '@nestjs/common';
import { EstatisticaService } from './estatistica.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('estatistica')
export class EstatisticaController {

    constructor(private estatisticaService: EstatisticaService) {}

    //PROTOCOL: Get
  //ROTA: /user
  //DESC: Amostra todos os users
  //funcao do tipo Promise array de user

  @Get('/numberofusers')
  getAllUsers() {
    //vai buscar a funcao ao service
    return this.estatisticaService.numberOfUsers();
  }

  @Get('/numberofveiculos')
  getAllVeiculos() {
    return this.estatisticaService.numberOfVeiculos();
  }


  @Get('/numberofreservas')
  getAllReservas() {
    //vai buscar a funcao ao service
    return this.estatisticaService.numberOfReservas();
  }

  @Get('/numberofmultas')
  numberOfMultas() {
    //vai buscar a funcao ao service
    return this.estatisticaService.numberOfMultas();
  }


  @Get('/numberofmovimentos')
  getAllMovimentos() {
    //vai buscar a funcao ao service
    return this.estatisticaService.numberOfMovimentos();
  }

  @Get('/occupationparques')
  occupationParque() {
    //vai buscar a funcao ao service
    return this.estatisticaService.ocupationParque();
  }
}
