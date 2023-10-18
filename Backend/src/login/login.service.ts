import { Injectable } from '@nestjs/common';
import { Login } from './Entity/login.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoginDto } from './dto/create-Login.dto';

@Injectable()
export class LoginService {
  //liga ao entity user para
  constructor(
    @InjectRepository(Login)
    private loginsRepository: Repository<Login>,
  ) {}

  //Return: cria um user na base de dados
  findAll() {
    return this.loginsRepository.find();
  }

  //Return: cria um user na base de dados
  create(createLoginDto: CreateLoginDto) {

    return this.loginsRepository.save(createLoginDto);
  }

  findLoginByUsername(username: string){
    return this.loginsRepository.findOne({where: {LoginUsername: username}})
  }

  
}
