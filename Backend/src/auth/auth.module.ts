import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginModule } from 'src/login/login.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';


@Module({
	imports: [
		LoginModule,
		JwtModule.register({
			global: true,
			secret: jwtConstants.secret,
			signOptions: { expiresIn: '9000s' },
		}),
		PassportModule
	],
	providers: [AuthService, JwtStrategy, LocalStrategy],
	controllers: [AuthController],
	exports: [AuthService],
})
export class AuthModule {}
