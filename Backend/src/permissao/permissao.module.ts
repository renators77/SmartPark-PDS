import { Module } from '@nestjs/common';
import { PermissaoService } from './permissao.service';
import { PermissaoController } from './permissao.controller';
import { Permissao } from './Entity/permissao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

//consegues definir a metadata da classe
@Module({
  providers: [PermissaoService],
  controllers: [PermissaoController],
  imports: [TypeOrmModule.forFeature([Permissao])],
})
export class PermissaoModule {}
