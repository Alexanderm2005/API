import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Backpack, Prisma } from '@prisma/client';

@Injectable()
export class BackpackService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.BackpackCreateInput): Promise<Backpack> {
    return this.prisma.backpack.create({ data });
  }

  async findAll(): Promise<Backpack[]> {
    return this.prisma.backpack.findMany();
  }

  async findOne(id: number): Promise<Backpack | null> {
    return this.prisma.backpack.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.BackpackUpdateInput): Promise<Backpack> {
    return this.prisma.backpack.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Backpack> {
    return this.prisma.backpack.delete({ where: { id } });
  }
}
