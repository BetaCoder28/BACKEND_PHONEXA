import { UsersService } from './users.service';
import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { RegisterDto } from './dto/register.dto';
import { Public } from 'src/middlewares/auth/public.decorator';
import { ApiCookieAuth } from 'src/middlewares/auth/cookie-auth.decorator';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Usuarios')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  @ApiOperation({ summary: 'Registrar un nuevo usuario' })
  async register(@Body() registerDto: RegisterDto) {
    try {
      console.log('=== REGISTRO DE USUARIO - CONTROLADOR ===');
      console.log('📥 Datos recibidos en el controlador:');
      console.log('👤 Datos del usuario:', {
        name: registerDto.name,
        email: registerDto.email,
        isPremiumUser: registerDto.isPremiumUser ?? 'false',
        password: '[PROTEGIDA]',
      });

      // Llama a la función simplificada createUserDB
      const result = await this.usersService.createUserDB(registerDto);

      console.log('✅ Registro completado exitosamente en el controlador');
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      console.error('❌ Error en el controlador de registro:', error.message);
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Error al registrar el usuario',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  @ApiOperation({
    summary: 'Obtener la lista de todos los usuarios',
  })
  async findAll() {
    try {
      const users = await this.usersService.findAllUsers();
      return {
        success: true,
        data: users,
      };
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Error al obtener los usuarios',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @ApiCookieAuth()
  @Get(':idUser')
  @ApiOperation({ summary: 'Obtener usuario por ID (requiere autenticación)' })
  async getUserById(@Param('idUser', ParseIntPipe) idUser: number) {
    try {
      const result = await this.usersService.getUserById(idUser);
      return result;
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Error interno del servidor',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
