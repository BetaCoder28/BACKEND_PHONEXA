import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async createUserDB(data: RegisterDto) {
    console.log('=== PROCESAMIENTO BASE DE DATOS ===');
    console.log('🔍 Verificando si el usuario ya existe...');

    try {
      // 1. Verificar si el usuario ya existe (SOLO por email, ya no hay phoneNumber)
      const existingUser = await this.prisma.user.findUnique({
        where: { email: data.email },
      });

      if (existingUser) {
        console.error(
          '❌ Usuario con este email ya existe:',
          existingUser.email,
        );
        throw new Error('El usuario con este email ya existe');
      }
      console.log('✅ Usuario no existe, puede proceder con el registro');

      // 2. Encriptar la contraseña
      console.log('🔐 Encriptando contraseña...');
      const hashedPassword = await bcrypt.hash(data.password, 10);
      console.log('✅ Contraseña encriptada correctamente');

      // 3. Crear usuario
      console.log('💾 Creando usuario en base de datos...');

      const newUser = await this.prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: hashedPassword,
          isPremiumUser: data.isPremiumUser ?? 'false',
        },
      });

      console.log('🎉 REGISTRO COMPLETADO EXITOSAMENTE');
      console.log('📊 Resultado BD:', {
        message: 'Usuario creado correctamente',
        idUser: newUser.idUser,
        isPremiumUser: newUser.isPremiumUser,
      });
      console.log('===============================');

      return {
        message: 'Usuario creado correctamente',
        idUser: newUser.idUser,
      };
    } catch (error) {
      console.error('💥 ERROR EN PROCESAMIENTO BD:', error.message);
      console.error('🚫 PROCESAMIENTO BD FALLIDO');
      console.log('===============================');
      throw new Error(`Error al crear usuario en BD: ${error.message}`);
    }
  }

  async getUserById(idUser: number) {
    try {
      const foundUser = await this.prisma.user.findUnique({
        where: { idUser: idUser },
        select: {
          idUser: true,
          name: true,
          email: true,
          isPremiumUser: true,
        },
      });

      if (foundUser) {
        return {
          success: true,
          data: foundUser,
        };
      }

      return {
        success: false,
        message: 'Usuario no encontrado',
      };
    } catch (error) {
      throw new Error(`Error al buscar usuario: ${error.message}`);
    }
  }

  // // Reutilizamos el DTO de registro y solo aseguramos que el campo 'isPremiumUser' sea 'true'.
  // async createPremiumAccount(data: PremiumAccountDto) {
  //   try {
  //     // 1. Verificar si el usuario ya existe (SOLO por email)
  //     const existingUser = await this.prisma.user.findUnique({
  //       where: { email: data.email },
  //     });

  //     if (existingUser) {
  //       throw new Error('El usuario con este email ya existe');
  //     }

  //     // 2. Encriptar la contraseña
  //     const hashedPassword = await bcrypt.hash(data.password, 10);

  //     // 3. Crear el usuario (marcado como premium)
  //     const newUser = await this.prisma.user.create({
  //       data: {
  //         name: data.name,
  //         email: data.email,
  //         password: hashedPassword,
  //         isPremiumUser: 'true', // Forzamos el valor 'true'
  //       },
  //     });

  //     return {
  //       message: 'Cuenta Premium creada correctamente',
  //       userId: newUser.idUser,
  //       isPremium: newUser.isPremiumUser,
  //     };
  //   } catch (error) {
  //     throw new Error(`Error al crear cuenta Premium: ${error.message}`);
  //   }
  // }

  async findAllUsers() {
    try {
      const users = await this.prisma.user.findMany({
        select: {
          idUser: true,
          name: true,
          email: true,
          isPremiumUser: true, // Incluimos el nuevo campo
        },
      });

      return users;
    } catch (error) {
      console.error('Error al obtener todos los usuarios:', error.message);
      throw new Error(`Error al obtener usuarios: ${error.message}`);
    }
  }
}
