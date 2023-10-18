import { Body, Controller, Get, Post } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { findPagamentosReserva } from './dto/find-pagamento-reserva.dto';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';

@Controller('pagamento')
export class PagamentoController {
    constructor(private pagamentoService: PagamentoService) {}

    @Get()
    getPagamentos(){
        return this.pagamentoService.findAll();
    }
    
    //PROTOCOL: Post
    //ROTA: /pagamento/findPagamentoReserva
    //DESC: Mostra todos os pagamentos daquela Reserva
    //retorna array de Pagamentos da Reserva
    @Post('/findPagamentoReserva')
    findPagamentoReserva(@Body() reservaID: findPagamentosReserva){
       return this.pagamentoService.findPagamentosReserva(reservaID); 
    }


    //PROTOCOL: Post
    //ROTA: /pagamento
    //DESC:cria o pagamento
    //retorna o pagamento criado
    @Post()
    createPagamento(@Body() createPagamentoDto: CreatePagamentoDto){
        return this.pagamentoService.createPagamento(createPagamentoDto);
    }



}
