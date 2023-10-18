import { Module } from '@nestjs/common';
import { ParqueController } from './parque.controller';
import { ParqueService } from './parque.service';
import { Parque } from './Entity/parque.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ParqueService],
  controllers: [ParqueController],
  exports: [ParqueService],
  imports: [TypeOrmModule.forFeature([Parque])],
})
export class ParqueModule {}
