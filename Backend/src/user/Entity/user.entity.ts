//class da base de dados
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userID: number;

  @Column()
  Nome: string;

  @Column()
  Rua: string;

  @Column()
  NivelPermissao: number;

  @Column()
  LoginID: number;
}
