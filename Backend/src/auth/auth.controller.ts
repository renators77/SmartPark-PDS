import { Body, Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { SinginDto } from './dto/singin.dto';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@UseGuards(AuthGuard('local'))
	@Post('/login')
	async login(@Body() signInDto: SinginDto) {
		return this.authService.signIn(signInDto.LoginUsername, signInDto.LoginPassword);
	}
}
