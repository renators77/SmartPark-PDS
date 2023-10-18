import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './Entity/reserva.entity';
import { VeiculoModule } from 'src/veiculo/veiculo.module';

@Module({
	providers: [ReservaService],
	controllers: [ReservaController],
	exports: [ReservaService],
	imports: [VeiculoModule, TypeOrmModule.forFeature([Reserva])],
})
export class ReservaModule {}
