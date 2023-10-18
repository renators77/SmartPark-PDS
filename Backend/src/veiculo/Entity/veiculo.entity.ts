import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Veiculo {
  @PrimaryGeneratedColumn()
  VeiculoID: number;

  @Column()
  ValorMatricula: string;

  @Column()
  UserID: number;

}
