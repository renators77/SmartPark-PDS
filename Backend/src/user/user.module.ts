import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entity/user.entity';

//consegues definir a metadata da classe
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule {}
