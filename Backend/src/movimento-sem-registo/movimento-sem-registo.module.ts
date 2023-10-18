import { Module } from '@nestjs/common';
import { MovimentoSemRegistoController } from './movimento-sem-registo.controller';
import { MovimentoSemRegistoService } from './movimento-sem-registo.service';
import { MovimentoSemRegisto } from './Entity/movimento-sem-registo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParqueModule } from 'src/parque/parque.module';

@Module({
  controllers: [MovimentoSemRegistoController],
  providers: [MovimentoSemRegistoService],
  exports:[MovimentoSemRegistoService],
  imports: [ParqueModule,TypeOrmModule.forFeature([MovimentoSemRegisto])],

})
export class MovimentoSemRegistoModule {}
