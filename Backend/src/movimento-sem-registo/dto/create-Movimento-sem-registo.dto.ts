import { IsDateString, IsInt, IsString } from "class-validator";

export class CreateMovimentoSemRegistoDto {

    @IsString()
    valormatricula: string;

    @IsDateString()
    DataMovimento: string;

    DescMovimento: any;

    @IsInt()
    ParqueID: number;
}