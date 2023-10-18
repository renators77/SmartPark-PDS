import { IsInt } from 'class-validator';

export class CreateParqueDto {

    @IsInt()
    LugaresDisponiveis: number;

    @IsInt()
    LugaresTotal: number;

    @IsInt()
    TPID: number;
    
}