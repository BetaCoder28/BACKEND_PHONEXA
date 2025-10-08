import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
  IsBooleanString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ example: 'Luis Alberto', description: 'Nombre del usuario' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'prueba@ejemplo.com',
    description: 'Email del usuario',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(100)
  @ApiProperty({
    example: 'contraseña123',
    description: 'Contraseña del usuario',
  })
  password: string;

  @IsBooleanString()
  @IsOptional()
  @ApiProperty({
    example: 'false',
    description: 'Estado de usuario premium ("true" o "false")',
    required: false,
  })
  // El campo es un String en tu esquema de Prisma, por eso usamos IsBooleanString.
  isPremiumUser: string;
}
