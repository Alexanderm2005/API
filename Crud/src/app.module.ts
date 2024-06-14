import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BackpackModule } from './backpack/backpack.module';

@Module({
  imports: [PrismaModule, BackpackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
