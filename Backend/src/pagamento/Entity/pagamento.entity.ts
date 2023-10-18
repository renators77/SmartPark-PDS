import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pagamento{

    @PrimaryGeneratedColumn()
    PagamentoID: number;

    @Column()
    DataPagamento: Date;

    @Column()
    ValorPago: number;

    @Column()
    ReservaID: number;

    @Column()
    TPagamentoID: number;
}