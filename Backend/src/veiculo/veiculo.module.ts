import { Module } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { VeiculoController } from './veiculo.controller';
import { Veiculo } from './Entity/veiculo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [VeiculoService],
  controllers: [VeiculoController],
  exports: [VeiculoService],
  imports: [TypeOrmModule.forFeature([Veiculo])],
})
export class VeiculoModule {}
