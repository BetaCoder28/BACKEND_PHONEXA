import { PartialType } from '@nestjs/swagger';
import { CreateAeronauticalAlphabetCardDto } from './create-aeronautical-alphabet-card.dto';

export class UpdateAeronauticalAlphabetCardDto extends PartialType(CreateAeronauticalAlphabetCardDto) {}