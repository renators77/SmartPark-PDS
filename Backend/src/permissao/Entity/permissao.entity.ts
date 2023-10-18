import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Permissao {
  @PrimaryGeneratedColumn()
  PermissaoID: number;

  @Column()
  PermissaoNome: string;

  @Column()
  PermissaoDesc: string;
}