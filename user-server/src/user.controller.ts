import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'get_all_users' })
  async getAll() {        
    return await this.userService.getAll()
  }

  @MessagePattern({ cmd: 'get_user_by_id' })
  async getById(id:string) {        
    return await this.userService.getById(id)
  }

  @MessagePattern({ cmd: 'create_user' })
  async create(data) {    
    return await this.userService.create(data)
  }

  @MessagePattern({ cmd: 'update_user' })
  async update({id, data}) {    
    return await this.userService.update(id,data)
  }

  @MessagePattern({ cmd: 'delete_user' })
  async delete(id:string) {    
    return await this.userService.delete(id)
  }
}
