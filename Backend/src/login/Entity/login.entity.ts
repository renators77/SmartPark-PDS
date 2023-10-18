import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Login {
  @PrimaryGeneratedColumn()
  LoginID: number;

  @Column()
  LoginPassword: string;

  @Column()
  LoginUsername: string;

  @Column()
  PermissaoID: number;
}
