import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject('NOTIFICATION_SERVICE') private readonly notificationServiceClient: ClientProxy
  ){}

  async getAll(){
    return await this.userRepository.find()
  }

  async getById(id:string){
    return await this.userRepository.findOne({where:{id},relations:{followers:true}})
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

  async follow(value:{user:string, follow:string}){
    const data = await this.userRepository.findOne({
      where:{
        id: value.user
      },
      relations:{
        followers:true
      }
    })

    const user = await this.userRepository.findOne({where:{id:value.follow}})

    data.followers.push(user)

    this.notificationServiceClient.emit({cmd:"create_notification"},{title:"followed",status:'status'})

    return await this.userRepository.save(data)
  }

  async unFollow(value:{user:string, follow:string}){
    const data = await this.userRepository.findOne({
      where:{
        id: value.user
      },
      relations:{
        followers:true
      }
    })

    data.followers.filter(u=>u.id != value.follow)

    return await this.userRepository.save(data)
  }
}
