import { IsString } from "class-validator";

export class CreateTipoPagamentoDto {
    
    @IsString()
    DescPagamento: string;
}