import { Test, TestingModule } from '@nestjs/testing';
import { PoliticasService } from './politicas.service';

describe('PoliticasService', () => {
  let service: PoliticasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoliticasService],
    }).compile();

    service = module.get<PoliticasService>(PoliticasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
