import { Module } from '@nestjs/common';
import { EstatisticaService } from './estatistica.service';
import { EstatisticaController } from './estatistica.controller';
import { UserModule } from 'src/user/user.module';
import { MultaModule } from 'src/multa/multa.module';
import { ParqueModule } from 'src/parque/parque.module';
import { ReservaModule } from 'src/reserva/reserva.module';
import { MovimentoComRegistoModule } from 'src/movimento-com-registo/movimento-com-registo.module';
import { MovimentoSemRegistoModule } from 'src/movimento-sem-registo/movimento-sem-registo.module';
import { VeiculoModule } from 'src/veiculo/veiculo.module';

@Module({
	providers: [EstatisticaService],
	controllers: [EstatisticaController],
	imports: [
		UserModule,
		VeiculoModule,
		MultaModule,
		ParqueModule,
		ReservaModule,
		MovimentoComRegistoModule,
		MovimentoSemRegistoModule,
	],
})
export class EstatisticaModule {}
