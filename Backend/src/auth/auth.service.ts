import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginService } from 'src/login/login.service';

@Injectable()
export class AuthService {
	constructor(private loginService: LoginService, private jwtService: JwtService) {}

	async login(user: any) {
		const payload = { LoginUsername: user.LoginUsername, sub: user.LoginID };
	}

	async signIn(username: string, pass: string): Promise<any> {
		const user = await this.loginService.findLoginByUsername(username);
		if (user?.LoginPassword !== pass) {
			throw new UnauthorizedException();
		}
		const payload = { username: user.LoginUsername, sub: user.LoginID };
		return {
			Token: await this.jwtService.signAsync(payload),
			Permissao: user.PermissaoID,
			LoginID: user.LoginID
		};
	}
}
