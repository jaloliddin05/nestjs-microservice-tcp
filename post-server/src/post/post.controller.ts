import { Controller} from '@nestjs/common';
import { PostService } from './post.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern({ cmd: 'create_post' })
  create(data) {
    return this.postService.create(data);
  }

  @MessagePattern({ cmd: 'get_all_post_by_author' })
  findAll(author:string) {
    return this.postService.findAll(author);
  }

  @MessagePattern({ cmd: 'get_post_by_id' })
  findOne(id:string) {
    return this.postService.findOne(id);
  }

  @MessagePattern({ cmd: 'update_post' })
  update({id,data}) {
    return this.postService.update(id, data);
  }

  @MessagePattern({ cmd: 'delete_post' })
  remove(id: string) {
    return this.postService.remove(id);
  }
}
