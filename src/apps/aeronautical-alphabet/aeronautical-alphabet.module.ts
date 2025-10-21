import { Module } from '@nestjs/common';
import { AeronauticalAlphabetController } from './aeronautical-alphabet.controller';
import { AeronauticalAlphabetService } from './aeronautical-alphabet.service';
import { PrismaModule } from 'src/config/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AeronauticalAlphabetController],
  providers: [AeronauticalAlphabetService],
})
export class AeronauticalAlphabetModule {}