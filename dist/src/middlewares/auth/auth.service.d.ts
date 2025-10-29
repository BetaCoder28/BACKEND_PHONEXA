import { Response } from 'express';
import { LoginDto } from 'src/apps/login/dto/login.dto';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prismaService;
    private jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    validateUser(data: LoginDto): Promise<any>;
    login(user: any, res?: Response): Promise<{
        success: boolean;
        message: string;
        access_token: string;
    }>;
    logout(res: Response): Promise<{
        success: boolean;
        message: string;
    }>;
}
