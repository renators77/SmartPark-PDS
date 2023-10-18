import { IsInt } from 'class-validator';

export class UpdateParqueDto {

    @IsInt()
    LugaresDisponiveis: number;

    @IsInt()
    LugaresTotal: number;

    @IsInt()
    TPID: number;
    
}