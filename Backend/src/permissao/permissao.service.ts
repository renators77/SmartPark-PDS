import { Injectable, NotFoundException } from '@nestjs/common';
import { Permissao } from './Entity/permissao.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePermissaoDto } from './dto/create-Permissao.dto';

@Injectable()
export class PermissaoService {
  //liga ao entity permissao para
  constructor(
    @InjectRepository(Permissao)
    private permissaoRepository: Repository<Permissao>,
  ) {}

  //Return: retorna um array de permissao
  findAll(): Promise<Permissao[]> {
    return this.permissaoRepository.find();
  }

  //Return: cria uma permissao na base de dados
  create(createPermissaoDto: CreatePermissaoDto) {
    return this.permissaoRepository.save(createPermissaoDto);
  }

  async removePermissao(PermissaoID: number): Promise<void> {
     
    const permissao = await this.permissaoRepository.findOne({where: {PermissaoID : PermissaoID}});
    
       //verifica se existe
       if (!permissao){
        throw new NotFoundException(`Permissao with ID ${PermissaoID} not found`);
       }
       
       //faz remocao do parque
       await this.permissaoRepository.remove(permissao);
   }
}
