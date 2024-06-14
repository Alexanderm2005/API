import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BackpackService } from './backpack.service';
import { Prisma } from '@prisma/client';

@Controller('backpack')
export class BackpackController {
  constructor(private readonly backpackService: BackpackService) {}

  @Post()
  create(@Body() createBackpackDto: Prisma.BackpackCreateInput) {
    return this.backpackService.create(createBackpackDto);
  }

  @Get()
  findAll() {
    return this.backpackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backpackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBackpackDto: Prisma.BackpackUpdateInput) {
    return this.backpackService.update(+id, updateBackpackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backpackService.remove(+id);
  }
}

