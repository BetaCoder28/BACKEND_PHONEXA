import { Test, TestingModule } from '@nestjs/testing';
import { PoliticasController } from './politicas.controller';

describe('PoliticasController', () => {
  let controller: PoliticasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoliticasController],
    }).compile();

    controller = module.get<PoliticasController>(PoliticasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
