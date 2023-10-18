import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './Entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-User.dto';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class UserService {
  //liga ao entity user para
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  //Return: retorna um array de users
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  //Return: cria um user na base de dados
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }


 //Return: o user alterado

  //desc:faz update ao nome do user
  update(updateUserDto: UpdateUserDto, userID: number): Promise<User> {
    //encontra user
    const userToUpdated = this.usersRepository.findOne({
      where: { userID: userID },
    });

    //verifica se existe
    if (!userToUpdated) {
      throw new NotFoundException(`User with ID ${userID} not found`);
    }


    //faz update do user
    this.usersRepository.update(userID, updateUserDto);

    return this.usersRepository.findOne({ where: { userID: userID } });
  }


  findOne(userID: number): Promise<User> {
    return this.usersRepository.findOne({where: {userID : userID}});
    
  }

  async removeUser(userID: number): Promise<void> {
    const user = await this.usersRepository.findOne({where: {userID : userID}});
    if (!user){
      throw new NotFoundException(`User with ID ${userID} not found`);
    }
    await this.usersRepository.remove(user);
  }
}
