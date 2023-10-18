import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super({
			usernameField: 'LoginUsername', // specify the property name for username
			passwordField: 'LoginPassword', // specify the property name for password
		});
	}

	async validate(username: string, password: string): Promise<any> {
		const user = await this.authService.signIn(username, password);
		if (!user) {
			throw new UnauthorizedException();
		}
		return user;
	}
}
