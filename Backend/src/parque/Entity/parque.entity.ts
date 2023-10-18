import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Parque {
  @PrimaryGeneratedColumn()
  ParqueID: number;

 @Column()
 LugaresDisponiveis: number;

 @Column()
 LugaresTotal: number;

 @Column()
 TPID: number;

}