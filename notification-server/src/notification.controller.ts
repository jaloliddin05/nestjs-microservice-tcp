import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { NotificationService } from './notification.service';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @MessagePattern({ cmd: 'get_all_notification' })
  async getAll() {        
    return await this.notificationService.getAll()
  }

  @MessagePattern({ cmd: 'get_notification_by_id' })
  async getById(id:string) {        
    return await this.notificationService.getOne(id)
  }

  @MessagePattern({ cmd: 'create_notification' })
  async create(data) {    
    return await this.notificationService.create(data)
  }

  @MessagePattern({ cmd: 'update_notification' })
  async update({id, data}) {    
    return await this.notificationService.update(id,data)
  }

  @MessagePattern({ cmd: 'delete_notification' })
  async delete(id:string) {    
    return await this.notificationService.delete(id)
  }
}
