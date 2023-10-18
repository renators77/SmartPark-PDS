import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'movimentosemregisto' })
export class MovimentoSemRegisto {
    @PrimaryGeneratedColumn()
    MovimentoSemRegistoID: number;

    @Column()
    valormatricula: string;

    @Column()
    DataMovimento: Date;

    @Column()
    DescMovimento: string;

    @Column()
    ParqueID: number;

}