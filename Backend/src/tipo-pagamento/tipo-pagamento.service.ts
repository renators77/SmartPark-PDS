import { Injectable, NotFoundException } from '@nestjs/common';
import { TipoPagamento } from './Entity/tipo-pagamento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoPagamentoDto } from './dto/create-Tipo-Pagamento.dto';

@Injectable()
export class TipoPagamentoService {
 //liga a classe pagamento do service para o controler
 constructor(
     @InjectRepository(TipoPagamento)
     private tipoPagamentoRepository: Repository<TipoPagamento>,
    ) {}

 //Return: retorna um array de MovimentoSemRegisto
 findAll(): Promise<TipoPagamento[]> {
     return this.tipoPagamentoRepository.find();
    }

 //Return: cria um parque na base de dados
 create(createTipoPagamentoDto: CreateTipoPagamentoDto) {
     return this.tipoPagamentoRepository.save(createTipoPagamentoDto);
    }

 async removeTipoPagamento(TPagamentoID: number): Promise<void> {

 const tipoPagamento = await this.tipoPagamentoRepository.findOne({where: {TPagamentoID : TPagamentoID}});

    //verifica se existe
    if (!tipoPagamento){
     throw new NotFoundException(`Tipo Parque with ID ${TPagamentoID} not found`);
    }
    
    //faz remocao do tipo de parque
    await this.tipoPagamentoRepository.remove(tipoPagamento);
}
}
