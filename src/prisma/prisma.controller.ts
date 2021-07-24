import { PrismaService } from './prisma.service';
import { Controller, Get } from '@nestjs/common';
import { Task as PrismaTask } from '@prisma/client';
@Controller('prisma')
export class PrismaController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getTask(): Promise<PrismaTask[]> {
    const result = await this.prismaService.task.findMany();
    return result;
  }
}
