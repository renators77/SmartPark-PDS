import { Module } from '@nestjs/common';
import { MovimentoComRegistoService } from './movimento-com-registo.service';
import { VeiculoModule } from 'src/veiculo/veiculo.module';
import MovimentoComRegistoController from './movimento-com-registo.controller';
import { MovimentoComRegisto } from './Entity/movimento-com-registo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParqueModule } from 'src/parque/parque.module';
import { ReservaModule } from 'src/reserva/reserva.module';
import { MultaModule } from 'src/multa/multa.module';

@Module({
	providers: [MovimentoComRegistoService],
	controllers: [MovimentoComRegistoController],
	exports: [MovimentoComRegistoService],
	imports: [MultaModule,VeiculoModule, ParqueModule, ReservaModule,TypeOrmModule.forFeature([MovimentoComRegisto])],
})
export class MovimentoComRegistoModule {}
