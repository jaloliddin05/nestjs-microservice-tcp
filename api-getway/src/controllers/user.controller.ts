import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { CreateUserDto, FollowUserDto, UpdateUserDto } from 'src/dto/user';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy
  ) {}

  @Get('/')
  @ApiOperation({ summary: 'Method: returns all' })
  @HttpCode(HttpStatus.OK)
  async getAll(){
    return await firstValueFrom(this.userServiceClient.send({cmd:"get_all_users"},{}))
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single by id' })
  @HttpCode(HttpStatus.OK)
  async getOne(@Param('id') id: string) {
    return await firstValueFrom(this.userServiceClient.send({cmd:'get_user_by_id'},id))
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: create' })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateUserDto) {
    return await firstValueFrom(this.userServiceClient.emit({cmd:"create_user"},data))
  }

  @Post('/follow')
  @ApiOperation({ summary: 'Method: follow' })
  @HttpCode(HttpStatus.CREATED)
  async followUser(@Body() data: FollowUserDto) {
    return await firstValueFrom(this.userServiceClient.emit({cmd:"follow_user"},data))
  }

  @Post('/un-follow')
  @ApiOperation({ summary: 'Method: unfollow' })
  @HttpCode(HttpStatus.CREATED)
  async unFollowUser(@Body() data: FollowUserDto) {
    return await firstValueFrom(this.userServiceClient.emit({cmd:"un_follow_user"},data))
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Method: updating' })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateUserDto,
    @Param('id') id: string,
  ){
    return await firstValueFrom(this.userServiceClient.emit({cmd:"update_user"},{id,data}))
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await firstValueFrom(this.userServiceClient.emit({cmd:"delete_user"},id))
  }
}
