import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity () 
export class Multa {
    @PrimaryGeneratedColumn()
    MultaId: number;

    @Column()
    ValorMulta: number;

    @Column()
    DataMulta: Date;

    @Column()
    DuracaoMulta: number;


}