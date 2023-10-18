import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoParque } from './Entity/tipoparque.entity';
import { Repository } from 'typeorm';
import { CreateTipoParqueDto } from './dto/create-tipoparque.dto';

@Injectable()
export class TipoparqueService {
  constructor(
    @InjectRepository(TipoParque)
    private tipoParqueRepository: Repository<TipoParque>,
  ) {}

//Return: retorna um array de Parques
findAll(): Promise<TipoParque[]> {
return this.tipoParqueRepository.find();
}

  //Return: cria um TipoParque na base de dados
  create(createTipoParqueDto: CreateTipoParqueDto) {
    return this.tipoParqueRepository.save(createTipoParqueDto);
  }

  //desc: faz a remocao do parque com o Id associado ha busca
  findOne(TPID: number): Promise<TipoParque> {
    return this.tipoParqueRepository.findOne({where: {TPID : TPID}});
   }
   
   async removeTipoParque(TPID: number): Promise<void> {
    
    const tipoParque = await this.tipoParqueRepository.findOne({where: {TPID : TPID}});
    
       //verifica se existe
       if (!tipoParque){
        throw new NotFoundException(`Tipo Parque with ID ${TPID} not found`);
       }
       
       //faz remocao do tipo de parque
       await this.tipoParqueRepository.remove(tipoParque);
   }
}
