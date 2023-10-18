import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tipopagamento' })
export class TipoPagamento {
    @PrimaryGeneratedColumn()
    TPagamentoID: number;

    @Column()
    DescPagamento: string;
}