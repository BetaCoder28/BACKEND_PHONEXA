import { Module } from '@nestjs/common';
import { PoliticasController } from './politicas.controller';
import { PoliticasService } from './politicas.service';

@Module({
  controllers: [PoliticasController],
  providers: [PoliticasService]
})
export class PoliticasModule {}
