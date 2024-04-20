import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async getAll(){
    return await this.userRepository.find()
  }

  async getById(id:string){
    return await this.userRepository.findOne({where:{id}})
  }

  async create(value){
    const data = this.userRepository.create(value)
    return await this.userRepository.save(data)
  }

  async update(id:string, value){
    return await this.userRepository.update({id},value)
  }

  async delete(id:string){
    return await this.userRepository.delete(id)
  }
}
