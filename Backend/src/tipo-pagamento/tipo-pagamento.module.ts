import { Module } from '@nestjs/common';
import { TipoPagamentoController } from './tipo-pagamento.controller';
import { TipoPagamentoService } from './tipo-pagamento.service';
import { TipoPagamento } from './Entity/tipo-pagamento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TipoPagamentoController],
  providers: [TipoPagamentoService],
  imports: [TypeOrmModule.forFeature([TipoPagamento])],
})
export class TipoPagamentoModule {}
