import { Module } from '@nestjs/common';
import { MultaController } from './multa.controller';
import { MultaService } from './multa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Multa } from './Entity/multa.entity';
import { ReservaModule } from 'src/reserva/reserva.module';
import { PagamentoModule } from 'src/pagamento/pagamento.module';

@Module({
  controllers: [MultaController],
  exports : [MultaService],
  providers: [MultaService],
  imports: [PagamentoModule,ReservaModule,TypeOrmModule.forFeature([Multa])],
})
export class MultaModule {}
