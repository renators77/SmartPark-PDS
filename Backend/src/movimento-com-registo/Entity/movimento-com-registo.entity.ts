import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movimentocomregisto' })
export class MovimentoComRegisto {
  @PrimaryGeneratedColumn()
  MovimentoComRegistoID: number;

 @Column()
 DataMovimento: Date;

 @Column()
 DescMovimento: string;

 @Column()
 ParqueID: number;
 
 @Column()
 VeiculoID: number;

}