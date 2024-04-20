import { Injectable } from '@nestjs/common';
import { PrismaService } from '../_prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data) {
    return await this.prismaService.post.create({ data });
  }

  async findAll(author:string) {
    return await this.prismaService.post.findMany({
      where:{
        author
      }
    });
  }

  async findOne(id: string) {
    return await this.prismaService.post.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: string, data) {
    return await this.prismaService.post.update({
      data,
      where: { id },
    });
  }

  async remove(id: string) {
    return await this.prismaService.post.delete({ where: { id } });
  }
}
