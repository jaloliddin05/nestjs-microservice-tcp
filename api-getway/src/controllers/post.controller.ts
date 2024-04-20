import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { CreatePostDto, UpdatePostDto } from 'src/dto/post';

@ApiTags('Post')
@Controller('post')
export class PostController {
  constructor(
    @Inject('POST_SERVICE') private readonly postServiceClient: ClientProxy
  ) {}

  @Get('/author/:id')
  @ApiOperation({ summary: 'Method: returns all' })
  @HttpCode(HttpStatus.OK)
  async getAll(@Param('id') id:string){
    return await firstValueFrom(this.postServiceClient.send({cmd:"get_all_post_by_author"},id))
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single by id' })
  @HttpCode(HttpStatus.OK)
  async getOne(@Param('id') id: string) {
    return await firstValueFrom(this.postServiceClient.send({cmd:'get_post_by_id'},id))
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: create' })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreatePostDto) {
    return await firstValueFrom(this.postServiceClient.emit({cmd:"create_post"},data))
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Method: updating' })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdatePostDto,
    @Param('id') id: string,
  ){
    return await firstValueFrom(this.postServiceClient.emit({cmd:"update_post"},{id,data}))
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await firstValueFrom(this.postServiceClient.emit({cmd:"delete_post"},id))
  }
}
