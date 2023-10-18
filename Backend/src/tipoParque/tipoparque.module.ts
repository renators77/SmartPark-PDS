import { Module } from '@nestjs/common';
import { TipoparqueService } from './tipoparque.service';
import { TipoparqueController } from './tipoparque.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoParque } from './Entity/tipoparque.entity';

@Module({
  providers: [TipoparqueService],
  controllers: [TipoparqueController],
  imports: [TypeOrmModule.forFeature([TipoParque])],
})
export class TipoparqueModule {}
