import { IsDateString, IsInt, IsNumber, IsString } from "class-validator";

export class CreatePagamentoDto {
    @IsDateString()
    DataPagamento: Date;

    @IsNumber()
    ValorPago: number;

    @IsInt()
    ReservaID: number;

    @IsInt()
    TPagamentoID: number;
    
}