import { Controller, Get } from '@nestjs/common';
import { PoliticasService } from './politicas.service';
import { Public } from '../middlewares/auth/public.decorator';

@Controller('politicas')
export class PoliticasController {
  constructor(private readonly politicaService: PoliticasService) {}

  @Public()
  @Get()
  getPolicies() {
    return this.politicaService.getPolitcy();
  }
}
