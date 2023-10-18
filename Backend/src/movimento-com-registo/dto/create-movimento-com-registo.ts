import { IsDate, IsDateString, IsInt, IsString } from 'class-validator';

export class CreateMovimentoComRegistoDto {

    @IsDateString()
    DataMovimento: Date;

    DescMovimento: string;

    @IsInt()
    ParqueID: number;
    
    @IsString()
    ValorMatricula: string;

    VeiculoID: number;
}