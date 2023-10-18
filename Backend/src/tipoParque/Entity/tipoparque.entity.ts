import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tipoparque' })
export class TipoParque {
  @PrimaryGeneratedColumn()
  TPID: number;

  @Column()
  DescParque: string;
}
