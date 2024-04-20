import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { CreateNotificationDto, UpdateNotificationDto } from 'src/dto/notification';

@ApiTags('Notification')
@Controller('notification')
export class NotificationController {
  constructor(
    @Inject('NOTIFICATION_SERVICE') private readonly notificationServiceClient: ClientProxy
  ) {}

  @Get('')
  @ApiOperation({ summary: 'Method: returns all' })
  @HttpCode(HttpStatus.OK)
  async getAll(){
    return await firstValueFrom(this.notificationServiceClient.send({cmd:"get_all_notification"},{}))
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single by id' })
  @HttpCode(HttpStatus.OK)
  async getOne(@Param('id') id: string) {
    return await firstValueFrom(this.notificationServiceClient.send({cmd:'get_notification_by_id'},id))
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: create' })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateNotificationDto) {
    return await firstValueFrom(this.notificationServiceClient.emit({cmd:"create_notification"},data))
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Method: updating' })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateNotificationDto,
    @Param('id') id: string,
  ){
    return await firstValueFrom(this.notificationServiceClient.emit({cmd:"update_notification"},{id,data}))
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await firstValueFrom(this.notificationServiceClient.emit({cmd:"delete_notification"},id))
  }
}
