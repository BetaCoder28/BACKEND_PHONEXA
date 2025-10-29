import { PoliticasService } from './politicas.service';
export declare class PoliticasController {
    private readonly politicaService;
    constructor(politicaService: PoliticasService);
    getPolicies(): string;
}
