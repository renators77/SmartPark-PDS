import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/Entity/user.entity';
import { LoginModule } from './login/login.module';
import { Login } from './login/Entity/login.entity';
import { PermissaoModule } from './permissao/permissao.module';
import { Permissao } from './permissao/Entity/permissao.entity';
import { ParqueModule } from './parque/parque.module';
import { Parque } from './parque/Entity/parque.entity';
import { VeiculoModule } from './veiculo/veiculo.module';
import { Veiculo } from './veiculo/Entity/veiculo.entity';
import { TipoparqueModule } from './tipoparque/tipoparque.module';
import { TipoParque } from './tipoparque/Entity/tipoparque.entity';
import { ReservaModule } from './reserva/reserva.module';
import { AuthModule } from './auth/auth.module';
import { MovimentoSemRegistoModule } from './movimento-sem-registo/movimento-sem-registo.module';
import { MovimentoSemRegisto } from './movimento-sem-registo/Entity/movimento-sem-registo.entity';

import MovimentoComRegistoController from './movimento-com-registo/movimento-com-registo.controller';
import { MovimentoComRegistoModule } from './movimento-com-registo/movimento-com-registo.module';
import { MovimentoComRegisto } from './movimento-com-registo/Entity/movimento-com-registo.entity';
import { Reserva } from './reserva/Entity/reserva.entity';
import { TipoPagamentoModule } from './tipo-pagamento/tipo-pagamento.module';
import { TipoPagamento } from './tipo-pagamento/Entity/tipo-pagamento.entity';
import { PagamentoModule } from './pagamento/pagamento.module';
import { Pagamento } from './pagamento/Entity/pagamento.entity';
import { MultaModule } from './multa/multa.module';
import { Multa } from './multa/Entity/multa.entity';
import { EstatisticaService } from './estatistica/estatistica.service';
import { EstatisticaController } from './estatistica/estatistica.controller';
import { EstatisticaModule } from './estatistica/estatistica.module';

//dá loading há app controler e ao modeling nossa rota
@Module({
	imports: [
		//db connection
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: '127.0.0.1',
			port: 3306,
			username: 'root',
			password: '23062002',
			database: 'SmartPark',
			//entidades da base de dados
			entities: [
				User,
				Login,
				Permissao,
				Veiculo,
				Parque,
				TipoParque,
				MovimentoSemRegisto,
				MovimentoComRegisto,
				Reserva,
				TipoPagamento,
				Pagamento,
				Multa,
			],
			//synchronize serve para criar as tabelas se elas nao existirem
			synchronize: false,
			timezone: '+01:00',
		}),
		UserModule,
		PermissaoModule,
		LoginModule,
		Veiculo,
		ParqueModule,
		PermissaoModule,
		VeiculoModule,
		TipoparqueModule,
		ReservaModule,
		MovimentoSemRegistoModule,
		AuthModule,
		TipoPagamentoModule,
		PagamentoModule,
		MovimentoComRegistoModule,
		MultaModule,
		EstatisticaModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
