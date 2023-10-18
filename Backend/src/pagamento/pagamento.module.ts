import { Module } from '@nestjs/common';
import { PagamentoController } from './pagamento.controller';
import { PagamentoService } from './pagamento.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pagamento } from './Entity/pagamento.entity';

@Module({
  controllers: [PagamentoController],
  providers: [PagamentoService],
  exports:[PagamentoService],
  imports: [TypeOrmModule.forFeature([Pagamento])],
})
export class PagamentoModule {}
