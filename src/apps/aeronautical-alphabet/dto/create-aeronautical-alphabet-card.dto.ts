import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAeronauticalAlphabetCardDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty({
    example: 'Alpha',
    description: 'Palabra del alfabeto aeronáutico',
  })
  text: string;

  @IsString()
  @IsOptional()
  @MaxLength(2048)
  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'URL de la imagen',
    required: false,
  })
  imageUrl?: string;

  @IsString()
  @IsOptional()
  @MaxLength(2048)
  @ApiProperty({
    example: 'https://example.com/audio.mp3',
    description: 'URL del audio',
    required: false,
  })
  audioUrl?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  @ApiProperty({
    example: 'Al-fa',
    description: 'Manera de pronunciarlo',
    required: false,
  })
  pronunciation?: string;
}
