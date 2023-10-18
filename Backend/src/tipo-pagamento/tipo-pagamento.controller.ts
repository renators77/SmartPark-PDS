import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TipoPagamentoService } from './tipo-pagamento.service';
import { CreateTipoPagamentoDto } from './dto/create-Tipo-Pagamento.dto';

@Controller('tipo-pagamento')
export class TipoPagamentoController {
     //cria o construtor para podermos usar o parque.service
 constructor(private tipoPagamentoService: TipoPagamentoService) {}

 //PROTOCOL: Get
 //ROTA: /tipo-pagamento
 //DESC: Amostra todos os tipos de pagamento 
 //funcao do tipo Promise array de tipos de pagamento
 @Get()
 getAllTipoPagamento() {
     //vai buscar a funcao ao service
     return this.tipoPagamentoService.findAll();
    }

 //PROTOCOL: Post
 //ROTA: /tipo-pagamento
 //DESC: cria um tipo pagamento
 @Post()
 create(@Body() createTipoPagamentoDto: CreateTipoPagamentoDto) {
     return this.tipoPagamentoService.create(createTipoPagamentoDto);
    }

 @Delete('/:tipopagamentoId')
 remove(@Param('tipopagamentoId', ParseIntPipe) TPagamentoID: number){
     return this.tipoPagamentoService.removeTipoPagamento(TPagamentoID);
    }

}
