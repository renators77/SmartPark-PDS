import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { Login } from './Entity/login.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [LoginService],
  controllers: [LoginController],
  exports: [LoginService],

  imports: [TypeOrmModule.forFeature([Login])],
})
export class LoginModule {}
