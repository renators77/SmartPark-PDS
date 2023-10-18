import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reserva {
	@PrimaryGeneratedColumn()
	ReservaID: number;

	@Column()
	DataInicio: Date;

	@Column()
	DataFim: Date;

	@Column()
	ValorReserva: number;

	@Column()
	LoginId: number;

	@Column()
	MultaId: number;

	@Column()
	ParqueID: number;

	@Column()
	EstadoReserva: string;
  
	@Column()
	VeiculoID: number;
}
