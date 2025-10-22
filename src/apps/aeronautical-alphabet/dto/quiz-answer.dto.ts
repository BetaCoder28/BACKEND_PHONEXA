import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QuizAnswerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Alpha', description: 'Respuesta del usuario' })
  answer: string;
}