import { PrismaService } from 'src/config/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUserDB(data: RegisterDto): Promise<{
        message: string;
        idUser: number;
    }>;
    getUserById(idUser: number): Promise<{
        success: boolean;
        data: {
            name: string;
            email: string;
            isPremiumUser: string | null;
            idUser: number;
        };
        message?: undefined;
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    }>;
    findAllUsers(): Promise<{
        name: string;
        email: string;
        isPremiumUser: string | null;
        idUser: number;
    }[]>;
}
