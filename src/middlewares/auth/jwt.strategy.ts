import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private prismaService: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        // Primero intenta extraer de cookies
        (request: Request) => {
          return request?.cookies?.access_token;
        },
        // Si no hay cookie, intenta del header Authorization
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey:
        configService.get<string>('JWT_SECRET') || 'fallback-secret-key',
    });
  }

  async validate(payload: any) {
    try {
      // Verificar que el usuario aún existe en la base de datos
      const user = await this.prismaService.user.findUnique({
        where: { idUser: payload.idUser },
        select: {
          idUser: true,
          name: true,
          email: true,
          isPremiumUser: true, // ✅ Nuevo campo incluido
        },
      });

      if (!user) {
        throw new UnauthorizedException('Usuario no encontrado');
      }

      return {
        idUser: user.idUser,
        name: user.name,
        email: user.email,
        isPremiumUser: user.isPremiumUser,
      };
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
