import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(registerDto: RegisterDto): Promise<{
        success: boolean;
        data: {
            message: string;
            idUser: number;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        data: {
            name: string;
            email: string;
            isPremiumUser: string | null;
            idUser: number;
        }[];
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
}
