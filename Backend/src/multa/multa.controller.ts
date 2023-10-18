import { Controller, Get, Param } from '@nestjs/common';
import { MultaService } from './multa.service';

@Controller('multa')
export class MultaController {
    constructor(
        private multaService: MultaService,
    ){}

    //PROTOCOL: Get
    //ROTA: /multa
    //DESC: Amostra todas as multas
    //funcao do tipo Promise array de multas
    @Get()
    getAllMultas() {
        return this.multaService.GetAllMultas();
    }


    //PROTOCOL: Get
    //ROTA: /multa/userID
    //DESC: Amostra todas as multas associadas a um user
    //funcao do tipo Promise array de multas asssociado a um user.
    @Get('/:userID')
    getUserMultas(@Param('userID') userID: number){
        return this.multaService.getUserMulta(userID);
    }

}
