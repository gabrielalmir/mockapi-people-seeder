import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from './db/prisma.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [ScheduleModule.forRoot(), PrismaModule, PersonModule],
})
export class AppModule {}
