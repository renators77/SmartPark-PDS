import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  //PROTOCOL: Get
  //ROTA: /login
  //DESC: Amostra todos os logins
  //funcao do tipo Promise array de logins
  @Get()
  getLogin() {
    return this.loginService.findAll();
  }

  //PROTOCOL: post
  //ROTA: /login
  //DESC: insere um login na base de dados
  @Post()
  create(@Body() createLoginDto: any) {
    return this.loginService.create(createLoginDto);
  }

  //PROTOCOL: post
  //ROTA: /login
  //DESC: insere um login na base de dados
  @Post('/usernameID')
  userID(@Body() username: string) {
    return this.loginService.findLoginByUsername(username);
  }

  
}
